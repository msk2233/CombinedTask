const { execute } = require('../executequery');

let MD5 = require('md5');
let jwt = require('jsonwebtoken');
exports.login = async (req, res) => {
    res.render('login')
}

exports.login_data = async (req, res) => {
    const { email, password } = req.body;
    let check_qr = `select email from registration`;
    let check_data = await execute(check_qr);
    let count = 0;
    for (let i = 0; i < check_data.length; i++) {
        if (check_data[i].email == email) {
            count++;
        }
    }
    let check_pass = `select reg_password,salt,fname from registration where email='${email}'`;
    let pwd = await execute(check_pass)
    let salt = pwd[0].salt;
    let reg_password = MD5(password + salt);
    if (reg_password == pwd[0].reg_password) {
        count++;
    }
    const user = { email: email };


    if (count == 2) {
        const token = jwt.sign(user, "abc", { expiresIn: '1h' });
        res.cookie('access_token', token).status(200)
        res.json({ success: "yes" });
    }
    else {
        res.json({ success: "no" })
    }
}
exports.dataforpass = async (req, res) => {
    let flag = false
    let forpass = `select email,detailforpass from registration`;
    let datapass = await execute(forpass);
    datapass.forEach((element) => {
        if (element.email === req.query.email && element.detailforpass === req.query.frname) {
            flag = true
        }
    });
    res.json(flag)
}
exports.reset = async (req, res) => {
    let mail = req.query.email;
    let newpass = req.query.newpass;
    let salt = Math.round((Math.pow(36, 5) - Math.random() * Math.pow(36, 4))).toString(36).slice(1);
    let encodedpass = MD5(newpass + salt);
    let pass_query = `update registration set reg_password='${encodedpass}',salt = '${salt}',active_status=1 where email='${mail}'`;
    await execute(pass_query);
    res.json("yes")
}