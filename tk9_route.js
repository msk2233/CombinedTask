const { execute } = require('./executequery');
exports.tk9route_main=async (req,res)=>{
    qr = '';
    var sqldis = 'select * from student_master2_res;'
        data = await execute(sqldis);
        res.render('tk9', { title: 'User List', userData: data,qr:qr});
}

exports.tk9route_display =async (req, res) => {
    qr = req.body.str;
    str = JSON.stringify(qr);
    x = [];
    var temp = "";
    for (let i = 1; i < str.length - 1; i++) {
        const c = str.charAt(i);
        if (/^[a-zA-Z0-9 ]+$/.test(c)) {
            temp += c;
        }
        else {
            if (temp !== "") {
                x.push(temp);
                temp = "";
            }
            x.push(c);
        }
    }
    if (temp !== "") {
        x.push(temp);
    }
    var fn ='';
    var ln ='';
    var mail='';
    var phno='';
    var city='';
    for (i = 0; i < str.length - 1; i++) {
        
        if (i % 2 == 0) {
            var op = x[i];
            switch (op) {
                case '_':
                    fn += `${x[i + 1]}`;
                    break;
                case '^':
                    ln += `${x[i + 1]}`
                    break;
                case '$':
                    mail += `${x[i + 1]}`
                    break;
                case '{':
                    phno += `${x[i + 1]}`
                    break;
                case ':':
                    city += `${x[i + 1]}`
                    break;
            }
        }
    }
    var fname ='';
    for(i=0;i<fn.length;i++){
        fname += "fname like '"+fn.charAt(i)+"%'"+" or ";
    }
    if(fname == ''){
        fname += "fname like '%'";
    }
    else{
        fname = fname.substring(0, fname.length - 3);
    }
    var lname ='';
    for(i=0;i<ln.length;i++){
            lname += "lname like '"+ln.charAt(i)+"%'"+" or ";
            
        }
    if(lname == ''){
        lname += "lname like '%'";
    }
    else{
        lname = lname.substring(0, lname.length - 3);
    }
  
    var email ='';
    for(i=0;i<mail.length;i++){
        email += "Email like '"+mail.charAt(i)+"%'"+" or ";
    }
    if(email == ''){
        email += "Email like '%'";
    }else{
        email = email.substring(0, email.length - 3);
    }

    var phone ='';
    for(i=0;i<phno.length;i++){
        phone += "Phonenum like '"+phno.charAt(i)+"%'"+" or ";
    }
    if(phone == ''){
        phone += "Phonenum like '%'";
    } 
    else{
        phone = phone.substring(0, phone.length - 3);
    }
    var ct ='';
    for(i=0;i<city.length;i++){
        ct += "City like '"+city.charAt(i)+"%'"+" or ";
    }
    if(ct == ''){
        ct += "City like '%'";
    }
    else{
        ct = ct.substring(0, ct.length - 3);
    }


    query = `select * from student_master2_res where (${fname}) and (${lname}) and (${email}) and (${phone}) and (${ct}) ;`
        data = await execute(query);
        res.render('tk9', { title: 'User List',userData: data,qr:qr});
}
