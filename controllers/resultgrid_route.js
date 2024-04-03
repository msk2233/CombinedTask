var mysql = require('mysql');
const { execute } = require('../executequery');

exports.tk6route_main=async (req,res)=>{
    var pgno = parseInt(req.query.pgno) || '1';
    if(pgno == 1 || pgno == 0){
        pgno = 1;
        x =0;
      }
      else {
            x = (pgno-1)*20;
      }

const sqldis = `select student_master2_res.stu_id,student_master2_res.fname,
sum(case when Exam_master_res.examtype = 'Prilim' and Exam_master_res.exammode = 'Practical' then result_res.obtain_marks end) as Prilim_practical_total,
sum(case when Exam_master_res.examtype = 'Prilim' and Exam_master_res.exammode = 'Theory' then result_res.obtain_marks end) as Prilim_Theory_total,
sum(case when Exam_master_res.examtype = 'Terminal' and Exam_master_res.exammode = 'Practical' then result_res.obtain_marks end) as Terminal_practical_total,
sum(case when Exam_master_res.examtype = 'Terminal' and Exam_master_res.exammode = 'Theory' then result_res.obtain_marks end) as Terminal_Theory_total,
sum(case when Exam_master_res.examtype = 'Final' and Exam_master_res.exammode = 'Practical' then result_res.obtain_marks end) as Final_practical_total,
sum(case when Exam_master_res.examtype = 'Final' and Exam_master_res.exammode = 'Theory' then result_res.obtain_marks  end) as Final_Theory_total
from student_master2_res
inner join result_res on student_master2_res.stu_id = result_res.stu_id
inner join subject_master_res on result_res.sub_name = subject_master_res.sub_name
inner join Exam_master_res on result_res.examid = Exam_master_res.examid
group by result_res.stu_id,student_master2_res.fname order by stu_id limit ${x},20;`

  data = await execute(sqldis);
  res.render('result', {userData: data,pgno:pgno});
}
exports.tk6route_detail=async (req,res)=>{
    const id =  req.query.id;

    const detailsql =`SELECT result_res.sub_name,
    sum(case 
        when result_res.examid = 11
        then result_res.obtain_marks end) as 'pp',
    sum(case 
        when result_res.examid = 12
        then result_res.obtain_marks end ) as 'pt',
    sum(case 
        when result_res.examid = 21
        then result_res.obtain_marks end ) as 'tp',
    sum(case 
        when result_res.examid = 22
        then result_res.obtain_marks end ) as 'tt',
    sum(case 
        when result_res.examid = 31
        then result_res.obtain_marks end ) as 'fp',
    sum(case 
        when result_res.examid = 32
        then result_res.obtain_marks end ) as 'ft',fname,lname
        from result_res 
inner join student_master2_res on student_master2_res.stu_id = result_res.stu_id
   where result_res.stu_id =${id} group by result_res.sub_name;`;
    
  data = await execute(detailsql);
        res.render('result_detail', {title: 'User List',userData:data,id:id});
}

