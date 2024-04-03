const { execute } = require('../executequery');
var MD5 = require('md5');
var jwt = require('jsonwebtoken');
exports.login = async (req, res) => {
    res.render('login')
}

exports.login_data = async (req, res) => {
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
        res.json({ success: "yes" });
    }
    else {
        res.json({ success: "no" })
    }
}