
const { execute } = require('../executequery');
exports.tk15route= async (req,res)=>{
    timezones = [];
    let qr = `select timezone from timezone`;
    data = await execute(qr);
        for (let i = 0; i < data.length; i++) {
            timezones.push(data[i].timezone)
        }
       res.render('timezone', { timezones });

}
exports.tk15route_convert=(req,res)=>{
    const { timezone } = req.query;
    const currentTime = new Date().toLocaleString('en-US', { timeZone: timezone });
    res.send({currentTime});
}
