var mysql = require('mysql');
const { execute } = require('./executequery');

exports.tk5route=async (req,res)=>{
    const selectedMonth = req.query.month || '1';
    var pgno = parseInt(req.query.pgno) || '1';
    if(pgno == 1 || pgno == 0){
      pgno = 1;
      x =0;
    }
    else{
      x = (pgno-1)*20;
    }
    const sqldis = `SELECT student_master_3.stu_id,student_master_3.fname,count(case when P_A = 1 AND month(dayofmonth)=${selectedMonth} THEN P_A END) as "presentdays",ROUND(((count(case when P_A = 1 AND month(dayofmonth)=${selectedMonth} THEN P_A END)*100)/31),2) as "per" from student_master_3 inner join attendence_master on student_master_3.stu_id=attendence_master.stu_id  where P_A = "1" group by student_master_3.stu_id,student_master_3.fname limit ${x},20;`
    
    data = await execute(sqldis);
      res.render('tk5', { title: 'User List',userData: data,pgno:pgno,selectedMonth:selectedMonth});
}