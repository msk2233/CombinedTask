var express = require("express");
var mysql = require('mysql')
var MD5 = require('md5');
const path = require('path');
var jwt = require('jsonwebtoken');
var app = express();
app.use(express.static('public'));
var cookieParser = require('cookie-parser');
app.use(cookieParser());
const { execute } = require('./executequery');
var tk4 = require('./tk4_route.js');
var tk5 = require('./tk5_route.js')
var tk6 = require('./tk6_route.js')
var tk7 = require('./tk7_route.js')
var tk8 = require('./tk8_route.js')
var tk9 = require('./tk9_route.js')
var tk13 = require('./tk13_route.js')
var tk14 = require('./tk14_route.js')
var tk15 = require('./tk15_route.js')
var auth = require('./authentication.js')
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.get('/', (req, res) => {
    res.render('reg');
})
app.post('/reg_data', async (req, res) => {
    const { fname, email } = req.body;
    var checkmail = `select email from registration`;
    var check_mail = await execute(checkmail);
    var exist = '';

    for (let i = 0; i < check_mail.length; i++) {
        if (check_mail[i].email == email) {
            exist = "exist";
        }
    }
    if (exist == "exist") {
        res.json({ exist })
    }
    else {
        var randomcode = Math.round((Math.pow(36, 13) - Math.random() * Math.pow(36, 12))).toString(36).slice(1);
        var fr_query = `insert into registration(fname,email,activation_code,active_status) values ('${fname}','${email}','${randomcode}',0)`;
        await execute(fr_query);
        res.json({ randomcode, exist })
    }
})

app.get('/activate_link', async (req, res) => {
    var check_activate = `select activation_code from registration where email='${req.query.email}'`;
    var result = await execute(check_activate);
    var expire = '';
    var tog = `select createdtime from registration where email='${req.query.email}'`
    var timeofgeneration = await execute(tog);
    var currentdate = new Date();
    var datetime = currentdate.getFullYear() + "-" +
        ('0' + (currentdate.getMonth() + 1)).slice(-2) + "-" +
        ('0' + currentdate.getDate()).slice(-2) + " " +
        ('0' + currentdate.getHours()).slice(-2) + ":" +
        ('0' + currentdate.getMinutes()).slice(-2) + ":" +
        ('0' + currentdate.getSeconds()).slice(-2);

    const dateDifferenceInSeconds = (dateInitial, dateFinal) =>
        (dateFinal - dateInitial) / 1_000;

    if (result[0].activation_code == req.query.code) {

        if (dateDifferenceInSeconds(new Date(timeofgeneration), new Date(datetime)) > 3600) {
            expire = 'yes'
            res.json({ expire, code: '' })
        }
        else {
            expire = 'no'
            res.json({ expire, code: '' })
        }
    } else {
        res.json({ code: "code not match" })
    }

})
app.get('/password', (req, res) => {
    email = req.query.email;
    res.render('password', { email })
})
app.post('/create_password', async (req, res) => {
    const { password, repassword, email } = req.body;

    if (password == repassword) {
        var salt = Math.round((Math.pow(36, 5) - Math.random() * Math.pow(36, 4))).toString(36).slice(1);

        var encodedpass = MD5(password + salt);
        var pass_query = `update registration set reg_password='${encodedpass}',salt = '${salt}',active_status=1 where email='${email}'`;
        await execute(pass_query);
        res.json({ success: "yes" })
    }
    else {
        res.json({ success: "no" })
    }
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/password/login', (req, res) => {
    res.render('login');
})

app.post('/login_data', async (req, res) => {
    const { email, password } = req.body;
    var check_qr = `select email from registration`;
    var check_data = await execute(check_qr);

    var count = 0;

    for (let i = 0; i < check_data.length; i++) {
        if (check_data[i].email == email) {
            count++;
        }
    }
    var check_pass = `select reg_password,salt,fname from registration where email='${email}'`;
    var pwd = await execute(check_pass)
    var salt = pwd[0].salt;

    var reg_password = MD5(password + salt);
    if (reg_password == pwd[0].reg_password) {
        count++;
    }
    const user = { email: email };


    if (count == 2) {
        const token = jwt.sign(user, "abc", { expiresIn: '1h' });
        res.cookie('access_token', token).status(200)
        res.json({ success: "yes"});
    }
    else {
        res.json({ success: "no" })
    }
})

app.get('/dashboard',auth, (req, res) => {
        res.render('dashboard');
});
app.get('/dashboard',auth, (req, res) => {
    res.render('dashboard');
})
app.get('/dashboard/tk1',auth, (req, res) => {
    res.render('tk1');
})
app.get('/dashboard/tk2',auth, (req, res) => {
    res.render('tk2');
})
app.get('/dashboard/tk3',auth, (req, res) => {
    res.render('tk3');
})
app.get('/dashboard/tk4',auth, (req, res) => {
    tk4.tk4route(req, res);
})
app.get('/dashboard/tk5',auth, (req, res) => {
    tk5.tk5route(req, res);
})
app.get('/dashboard/tk6',auth, (req, res) => {
    tk6.tk6route_main(req, res);
})
app.get('/dashboard/tk6/detailedresult', auth,(req, res) => {
    tk6.tk6route_detail(req, res);
})
app.get('/dashboard/tk7',auth, (req, res) => {
    res.render('tk7');
})
app.post('/dashboard/tk7/submit',auth, (req, res) => {
    var qr = req.body.query
    res.json(qr)
})
app.get('/dashboard/tk7/display',auth, (req, res) => {
    
    tk7.tk7route(req, res);
})
app.get('/dashboard/tk8',auth, (req, res) => {
    tk8.tk8route_main(req, res);
})
app.post('/dashboard/tk8/submit',auth, (req, res) => {
    tk8.tk8route(req, res);
})
app.get('/dashboard/tk9',auth, (req, res) => {
    tk9.tk9route_main(req, res);
})
app.post('/dashboard/tk9/submit',auth, (req, res) => {
    tk9.tk9route_display(req, res);
})

app.get('/dashboard/tk10',auth, (req, res) => {
    res.sendFile(path.join(__dirname, '../21_3_24/public/temp_1/assignment_1.html'));
})
app.get('/dashboard/tk11',auth, (req, res) => {
    res.sendFile(path.join(__dirname, '../21_3_24/public/temp_2/assignment_2.html'));
})
app.get('/dashboard/tk12',auth, (req, res) => {
    res.sendFile(path.join(__dirname, '../21_3_24/public/temp_3/assignment_3.html'));
})
app.get('/dashboard/tk13',auth, (req, res) => {
    res.render('tk13_main')
})
app.get('/dashboard/tk13_main/tk13_newform',auth, (req, res) => {
    tk13.insert(req, res);
})
app.post('/dashboard/tk13_main/post_data',auth, (req, res) => {
    tk13.backend(req, res)
    if (tk13.backend(req, res)) {
        tk13.insdata(req, res);
    }
    else{
        res.json(fail);
    }
})
app.get('/dashboard/tk13_main/tk13_updateform',auth, (req, res, next) => {
    tk13.update(req, res, next);
})
app.get('/fetch',auth, async (req, res) => {
    tk13.fetch(req, res);
})
app.post('/dashboard/tk13_main/update',auth, (req, res) => {
    tk13.backend(req, res)
    if (tk13.backend(req, res)) {
        tk13.updatedata(req, res);
    }
    else{
        res.json(fail);
    }
})
app.get('/dashboard/tk13_main/get_state',auth, async function (req, res) {
    tk13.get_state(req, res);
});

app.get('/dashboard/tk13_main/get_city',auth, async function (req, res) {
    tk13.get_city(req, res);
});
app.get('/dashboard/tk14',auth, (req, res) => {
    res.render('tk14_main')
})
app.get('/dashboard/tk14_main/tk14_newform',auth, (req, res) => {
    tk14.insert(req, res);
})
app.post('/dashboard/tk14_main/post_data',auth, (req, res) => {
    tk14.backend(req, res)
    if (tk14.backend(req, res)) {
        tk14.insdata(req, res);
    }
    else{
        res.json(fail);
    }
})
app.get('/dashboard/tk14_main/tk14_updateform',auth, (req, res, next) => {
    tk14.update(req, res, next);
})
app.get('/fetch',auth, async (req, res) => {
    tk14.fetch(req, res);
})
app.post('/dashboard/tk14_main/update',auth, (req, res) => {
    tk14.backend(req, res)
    if (tk14.backend(req, res)) {
        tk14.updatedata(req, res);
    }
    else{
        res.json(fail);
    }
})
app.get('/dashboard/tk14_main/get_state',auth, async function (req, res) {
    tk14.get_state(req, res);
});
app.get('/dashboard/tk14_main/get_city',auth, async function (req, res) {
    tk14.get_city(req, res);
});
app.get('/dashboard/tk15',auth, async function (req, res) {
   tk15.tk15route(req,res);
});
app.get('/dashboard/tk15/convert',auth, async function (req, res) {
    tk15.tk15route_convert(req,res);
 });
 var id='';
 app.get('/dashboard/tk16',auth, async function (req, res) {
    // tk15.tk15route(req,res);
    id = req.query.id;
    if (id != null) {
      res.render('tk16_view',{id:id});
    }
    else{
      res.render('tk16_main');
    }
 });

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;

