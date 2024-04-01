var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Dev@123",
    database: "timezone",
    dateStrings : true
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
exports.tk15route=(req,res)=>{
    timezones = [];
    var qr = `select timezone from timezone`;
    con.query(qr,(err,data)=>{
        for (let i = 0; i < data.length; i++) {
            timezones.push(data[i].timezone)
        }
       res.render('tk15', { timezones });
    })
}
exports.tk15route_convert=(req,res)=>{
    const { timezone } = req.query;
    const currentTime = new Date().toLocaleString('en-US', { timeZone: timezone });
    res.send({currentTime});
}
