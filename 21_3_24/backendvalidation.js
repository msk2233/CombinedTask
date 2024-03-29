
function basicdetail(body) {
    let count = 0;
    var valid = true;
    //for checking every data in basic detail
    //     for (key in body) {
    //             if (body[key] == null) {
    //                 return false;
    //             }  
    // }
    function required() {
        if (body.fname == '') {
            count++;
        }
    }
    function email() {
        if (body.email != '') {
            var email = body.email;
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!email.match(mailformat)) {
                count++;
            }
        }
    }
    function phonenum() {
        var phno = body.phno;
        if (phno != '') {
            var phnoregx = /^[6-9]\d{9}$/;
            if (!phnoregx.test(phno)) {
                count++;
            }
        }
    }
    function zipcode() {
        var zipcode = body.zipcode;
        if (zipcode != '') {
        var zipreg = /^[1-9][0-9]{5}$/;
            if (!zipreg.test(zipcode)) {
                count++;
            }
        }
    }
    function dob() {
        var dob = body.dob;
        if (dob != '') {
            var dobreg = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
            if (!dobreg.test(dob)) {
                count++;
            }
        }
    }
    phonenum();
    required();
    email();
    zipcode();
    dob();
    if (count == 0) {
        valid = true;
    }
    else {
        valid = false
    }
    return valid;
}
exports.basicdetail = basicdetail;