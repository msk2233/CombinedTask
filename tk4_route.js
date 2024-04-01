var mysql = require('mysql');
const { execute } = require('./executequery');

exports.tk4route=async (req,res)=> { 
var pgno = parseInt(req.query.pgno) || '1';
var srno = req.query.srno || 'stu_id'; 
if(pgno == 1 || pgno == 0){
  pgno = 1;
  str =0;
}
else{
  var str = (pgno-1)*200;
}   
var number = pgno;
switch (srno) {
  case 'stu_id':
      var sqldis = `SELECT * FROM student_master order by stu_id limit ${str},200`;
      data = await execute(sqldis)
        res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno});
    break;
    case 'fname':
      var sqldis = `SELECT * FROM student_master order by fname limit ${str},200`;
       data = await execute(sqldis)
      
        res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno}); 
    break;
    case 'lname':
      var sqldis = `SELECT * FROM student_master order by lname limit ${str},200`;
       data = await execute(sqldis)
      
        res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno}); 
    break;
    case 'email':
      var sqldis = `SELECT * FROM student_master order by email limit ${str},200`;
       data = await execute(sqldis)
      con.query(sqldis,(err,data) => {
        res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno});
      }); 
    break;
    case 'email2':
      var sqldis = `SELECT * FROM student_master order by email2 limit ${str},200`;
       data = await execute(sqldis)
      
        res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno}); 
      case 'Designation':
        var sqldis = `SELECT * FROM student_master order by Designation limit ${str},200`;
         data = await execute(sqldis)
        
          res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno});
 
      break;
      case 'City':
        var sqldis = `SELECT * FROM student_master order by City limit ${str},200`;
         data = await execute(sqldis)
        
          res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno});
 
      break;
      case 'Country':
        var sqldis = `SELECT * FROM student_master order by Country limit ${str},200`;
        
          res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno});
 
      break;
      case 'Phonenum':
        var sqldis = `SELECT * FROM student_master order by Phonenum limit ${str},200`;
         data = await execute(sqldis)
        
          res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno});
 
      break; 
      case 'Gender':
        var sqldis = `SELECT * FROM student_master order by Gender limit ${str},200`;
         data = await execute(sqldis)
        
          res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno});
 
      break;
      case 'zipcode':
        var sqldis = `SELECT * FROM student_master order by zipcode limit ${str},200`;
         data = await execute(sqldis)
        
          res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno});
 
      break;
      case 'createdTime':
        var sqldis = `SELECT * FROM student_master order by createdTime limit ${str},200`;
         data = await execute(sqldis)
        
          res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno});
 
      break;
  default:
     sqldis = `SELECT * FROM student_master limit ${str},200`;
      data = await execute(sqldis)
    
      res.render('tk4', { title: 'User List',userData: data,number:number,srno:srno}) 
    break;
}
}
