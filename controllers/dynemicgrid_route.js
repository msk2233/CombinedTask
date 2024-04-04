const { execute } = require('../executequery');

exports.tk7route_main = async (req, res) => {
    res.render('dynemicgrid_main');
}
exports.tk7route_submit = async (req, res) => {
    let qr = req.body.query
    res.json(qr)
}
exports.tk7route = async (req, res) => {
    let query = req.query.qr;
    let lim = 0;
    let pgno = parseInt(req.query.pgno);
    if (pgno == 1 || pgno == 0) {
        pgno = 1;
    }
    else {
        lim = (pgno - 1) * 20;
    }
    let values = [lim];
    let sqldis = `${query} limit ?,20`;
    let sql = `${query}`;
    let data = await execute(sql);
    let Data = await execute(sqldis,values);
    let length = Math.ceil(data.length / 20);
    res.render('dynemicgrid_display', { userData: Data, pgno: pgno, length, query });
}
