
const { execute } = require('../executequery');

exports.tk4route = async (req, res) => {
  let pgno = parseInt(req.query.pgno) || '1';
  let srno = req.query.srno || 'stu_id';
  let lim = 0;
  if (pgno != 1) {
    lim = (pgno - 1) * 200;
  }
  values = [lim];
  let sqldis = '';
  switch (srno) {
    case 'stu_id':
      sqldis = `SELECT * FROM student_master order by stu_id limit ?,200`;
      data = await execute(sqldis, values)
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });
      break;
    case 'fname':
      sqldis = `SELECT * FROM student_master order by fname limit ?,200`;
      data = await execute(sqldis, values)
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });
      break;
    case 'lname':
      sqldis = `SELECT * FROM student_master order by lname limit ?,200`;
      data = await execute(sqldis, values)
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });
      break;
    case 'email':
      sqldis = `SELECT * FROM student_master order by email limit ?,200`;
      data = await execute(sqldis)
      con.query(sqldis, (err, data) => {
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });
      });
      break;
    case 'email2':
      sqldis = `SELECT * FROM student_master order by email2 limit ?,200`;
      data = await execute(sqldis, values)
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });

    case 'Designation':
      sqldis = `SELECT * FROM student_master order by Designation limit ?,200`;
      data = await execute(sqldis, values)
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });
      break;

    case 'City':
      sqldis = `SELECT * FROM student_master order by City limit ?,200`;
      data = await execute(sqldis, values)
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });
      break;

    case 'Country':
      sqldis = `SELECT * FROM student_master order by Country limit ?,200`;
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });
      break;

    case 'Phonenum':
      sqldis = `SELECT * FROM student_master order by Phonenum limit ?,200`;
      data = await execute(sqldis, values)
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });
      break;

    case 'Gender':
      sqldis = `SELECT * FROM student_master order by Gender limit ?,200`;
      data = await execute(sqldis, values)
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });
      break;

    case 'zipcode':
      sqldis = `SELECT * FROM student_master order by zipcode limit ?,200`;
      data = await execute(sqldis, values)
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });
      break;

    case 'createdTime':
      sqldis = `SELECT * FROM student_master order by createdTime limit ?,200`;
      data = await execute(sqldis, values)
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno });
      break;

    default:
      sqldis = `SELECT * FROM student_master limit ?,200`;
      data = await execute(sqldis, values)
      res.render('staticgrid', { title: 'User List', userData: data, pgno: pgno, srno: srno })
      break;
  }
}
