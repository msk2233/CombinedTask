exports.tk16route=(req,res)=>{
    let id = req.query.id || '';
    if (id != '') {
      res.render('jsonplaceholder_view',{id:id});
    }
    else{
      res.render('jsonplaceholder_main');
    }
}