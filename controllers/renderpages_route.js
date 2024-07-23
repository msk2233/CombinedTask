const path = require('path');
exports.dashboard = async (req, res) => {
    res.render('dashboard')
}
exports.dynemictable = async (req, res) => {
    res.render('dynemictable');
}
exports.Javascript_Events = async (req, res) => {
    res.render('JavascriptEvents');
}
exports.KuKucube = async (req, res) => {
    res.render('KuKucube');
}
exports.TicTaeToe = async (req, res) => {
    res.render('tictaetoe');
}
exports.ehya_tamplate= async (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/temp_1/assignment_1.html'));
}
exports.Awan_Hoster_template= async (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/temp_2/assignment_2.html'));
}
exports.hirex_tamplate= async (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/temp_3/assignment_3.html'));
}
exports.forgotpass= async (req,res)=>{;
    res.render('forgotpass')
}
exports.err = async(req,res)=>{
    res.render('err');
}