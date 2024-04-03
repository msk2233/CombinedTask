const { execute } = require('../executequery');
var id='';
exports.tk8route_main=async (req,res)=>{
    var sqldis = 'select * from student_master2_res;'
    data = await execute(sqldis);
        res.render('Searching', { title: 'User List',userData: data,id:id});
}
exports.tk8route =async (req, res) => {
    id = req.body.id || '';
    op = req.body.operator;
    fname = req.body.firstname || '';
    lname = req.body.lastname || '';
    city = req.body.city || '';
    country = req.body.country || '';
        if(id != ''){
          queryfromid = `select * from student_master2_res where stu_id in (${id});`;
              data = await execute(queryfromid);
              res.render('Searching', { title: 'User List',userData: data,id:id});
        }
        else{
          queryfromid = `select * from student_master2_res where fname='${fname}'  ${op} lname='${lname}'  ${op} City='${city}'  ${op} Country='${country}';`
         data =await execute(queryfromid);
              res.render('Searching', { title: 'User List',userData: data,id:id});
        }
}
