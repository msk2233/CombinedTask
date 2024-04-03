var mysql = require('mysql');
const { execute } = require('../executequery');

exports.tk7route_main = async (req, res) => {
    res.render('dynemicgrid_main');
}
exports.tk7route_submit = async (req, res) => {
    var qr = req.body.query
    res.json(qr)
}
exports.tk7route = async (req, res) => {
    var query = req.query.qr;
    var pgno = parseInt(req.query.pgno);
    if (pgno == 1 || pgno == 0) {
        pgno = 1;
        x = 0;
    }
    else {
        x = (pgno - 1) * 20;
    }
    sqldis = `${query} limit ${x},20`;
    sql = `${query}`;
    data = await execute(sql);
    Data = await execute(sqldis);
    var length = Math.ceil(data.length / 20);
    res.render('dynemicgrid_display', { userData: Data, pgno: pgno, length, query });
}
