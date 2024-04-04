const { execute } = require('../executequery');
let id = '';
exports.tk8route_main = async (req, res) => {
    let sqldis = 'select * from student_master2_res;'
    data = await execute(sqldis);
    res.render('Searching', { title: 'User List', userData: data, id: id });
}
exports.tk8route = async (req, res) => {
    let id = req.body.id || '';
    let op = req.body.operator;
    let fname = req.body.firstname || '';
    let lname = req.body.lastname || '';
    let city = req.body.city || '';
    let country = req.body.country || '';
    if (id != '') {
        let queryfromid = `select * from student_master2_res where stu_id in (${id});`;
        data = await execute(queryfromid);
        res.render('Searching', { title: 'User List', userData: data, id: id });
    }
    else {
        let queryfromdata = `select * from student_master2_res where fname=?`+op+` lname=?`+op+` City=?`+op+` Country=?;`
        let values = [fname,lname,city,country]
        let data = await execute(queryfromdata,values);
        res.render('Searching', { title: 'User List', userData: data, id: id });
    }
}
