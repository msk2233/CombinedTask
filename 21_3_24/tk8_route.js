var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Dev@123",
    database: "28_2_res",
    dateStrings: true
});

con.connect(function (err) {
    if (err) throw err;
});
var id='';
exports.tk8route_main=(req,res)=>{
    var sqldis = 'select * from student_master2;'
    con.query(sqldis,(err,data) => {
        if(err) throw err;
        res.render('tk8', { title: 'User List',userData: data,id:id});
      })
}
exports.tk8route = (req, res) => {
    id = req.body.id || '';
    op = req.body.operator;
    fname = req.body.firstname || '';
    lname = req.body.lastname || '';
    city = req.body.city || '';
    country = req.body.country || '';
        if(id != ''){
          queryfromid = `select * from student_master2 where stu_id in (${id});`;
          con.query(queryfromid,(err,data) => {
              if(err) throw err;
              res.render('tk8', { title: 'User List',userData: data,id:id});
              })
        }
        else{
          queryfromid = `select * from student_master2 where fname='${fname}'  ${op} lname='${lname}'  ${op} City='${city}'  ${op} Country='${country}';`
          con.query(queryfromid,(err,data) => {
              if(err) throw err;
              res.render('tk8', { title: 'User List',userData: data,id:id});
              })
        }
}
