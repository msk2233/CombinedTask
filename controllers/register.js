const { execute } = require('../executequery');
exports.registerpage = async (req, res) => {
    res.render('reg');
}
exports.register=async (req,res)=> {
    const { fname, email } = req.body;
    var checkmail = `select email from registration`;
    var check_mail = await execute(checkmail);
    var status = `select active_status from registration`;
    isactive = await execute(status);
    var exist = '';
    
    for (let i = 0; i < check_mail.length; i++) {
        if (check_mail[i].email == email && isactive[i].active_status == 1) {
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
 }
exports.activate = async(req,res)=>{
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
}
exports.getpass = async(req,res)=>{
    email = req.query.email;
    res.render('password', { email })
}
exports.createpass = async (req, res) => {
    const { password, repassword, email } = req.body;
    if (password == repassword){
        var salt = Math.round((Math.pow(36, 5) - Math.random() * Math.pow(36, 4))).toString(36).slice(1);
        var encodedpass = MD5(password + salt);
        var pass_query = `update registration set reg_password='${encodedpass}',salt = '${salt}',active_status=1 where email='${email}'`;
        await execute(pass_query);
        res.json({ success: "yes" })
    }
    else {
        res.json({ success: "no" })
    }
}