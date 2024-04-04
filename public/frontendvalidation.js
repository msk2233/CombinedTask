
function validate() {
    let count = 0;
    let isvalid = true;

    //BASICDETAIL REQUIRED  VALIDATION
    let requiredfields = document.getElementsByClassName('req');
    for (let i = 0; i < requiredfields.length; i++) {
        const field = requiredfields[i];

        let fieldname = field.id;
        let errmsgid = fieldname + 'error';
        let errmsgelement = document.getElementById(errmsgid);
        if (field.value.trim() === "") {
            count++;
            errmsgelement.innerText = fieldname + ' is required';
        }
        else {
            errmsgelement.innerText = "";
        }
    }

     //BASICDETAIL FIELDS VALIDATION
    // email validation
    let email = document.getElementById('email').value;
    if (email != "") {
        let p = document.getElementById('emailerror');
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            p.innerText = "";
        }
        else {
            p.style.color = "orange";
            p.innerText = "wrong format";
            count++;

        }
    }

    //phone number validation
    let phno = document.getElementById("phonenumber").value;
    if (phno != "") {
        let phnoerror = document.getElementById('phonenumbererror');
        let regx = /^[6-9]\d{9}$/;
        if (regx.test(phno)) {
            phnoerror.innerText = "";
        }
        else {
            phnoerror.style.color = "orange";
            phnoerror.innerText = "wrong format";
            count++;
        }
    }
    // zipcode validation
    let zipcode = document.getElementById("zipcode").value;
    if (zipcode != "") {
        let zipcodeerror = document.getElementById('zipcodeerror');
        let zipreg = /^[1-9][0-9]{5}$/;
        if (zipreg.test(zipcode)) {
        }
        else {
            zipcodeerror.style.color = "orange";
            zipcodeerror.innerText = "wrong format";
            count++;

        }
    }

    //date of birth validation 
    let dob = document.getElementById("dob").value;
    if (dob != "") {
        let doberror = document.getElementById('doberror');
        let dobreg = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
        if (dobreg.test(dob)) {
            doberror.innerText = "";
        }
        else {
            doberror.style.color = "orange";
            doberror.innerText = "wrong format";
            count++;
        }
    }


    //EDUCATION VALIDATION

    //ssc
    let nob_ssc = document.getElementById('nob_ssc').value;
    let ps_ssc = document.getElementById('ps_ssc').value;
    let tage_ssc = document.getElementById('tage_ssc').value;
    let items1 = document.getElementsByClassName('requiredssc');
    
    if ((nob_ssc != '' && (ps_ssc == '' || tage_ssc == '')) || (ps_ssc != '' && (nob_ssc == '' || tage_ssc == '')) || (tage_ssc != '' && (ps_ssc == '' || nob_ssc == ''))) {
        for (let i=0; i < items1.length; i++) {
          items1[i].innerHTML = "*";
        }
        count++;
    }
    //hsc
    let nob_hsc = document.getElementById('nob_hsc').value;
    let ps_hsc = document.getElementById('ps_hsc').value;
    let tage_hsc = document.getElementById('tage_hsc').value;
    let items2 = document.getElementsByClassName('requiredhsc');
    if ((nob_hsc != '' && (ps_hsc == '' || tage_hsc == '')) || (ps_hsc != '' && (nob_hsc == '' || tage_hsc == '')) || (tage_hsc != '' && (ps_hsc == '' || nob_hsc == ''))) {
        for (let i=0; i < items2.length; i++) {
          items2[i].innerHTML = "*";
        }
        count++;
    }
    //bechlor
    let coursename_bach = document.getElementById('coursename_bach').value;
    let ps_bach = document.getElementById('ps_bach').value;
    let tage_bach = document.getElementById('tage_bach').value;
    let items3 = document.getElementsByClassName('requiredbech');
    if ((coursename_bach != '' && (ps_bach == '' || tage_bach == '')) || (ps_bach != '' && ( coursename_bach == '' || tage_bach == '')) || (tage_bach != '' && (ps_bach == '' || coursename_bach == ''))) {
        for (let i=0; i < items3.length; i++) {
          items3[i].innerHTML = "*";
        }
        count++;
    }
    //master
    let coursename_mas = document.getElementById('coursename_mas').value;
    let ps_mas = document.getElementById('ps_mas').value;
    let tage_mas = document.getElementById('tage_mas').value;
    let items4 = document.getElementsByClassName('requiredmas');
    if (coursename_mas != '' || ps_mas != '' || tage_mas != '') {
        if (coursename_mas == '' || ps_mas == '' || tage_mas == '') {
            for (let i=0; i < items4.length; i++) {
              items4[i].innerHTML = "*";
            }
            count++;
        }
    }

    // WORK EXPERIENCE VALIDATIONS

        //row1
        let name1 = document.getElementById('companyname1').value;
        let desi1 = document.getElementById('designation_exp1').value;
        let start1 = document.getElementById('date_of_join_exp1').value;
        let end1 = document.getElementById('date_of_coplition_exp1').value;

        let items5 = document.getElementsByClassName('required_exp1');
        if (name1 != '' || desi1 != '' || start1 != '' || end1 != '') {
            if (name1 == '' || desi1 == '' || start1 == '' || end1 == '') {
                for (let i=0; i < items5.length; i++) {
                  items5[i].innerHTML = "*";
                }
                count++;
            }
        }
           //row2
           let name2 = document.getElementById('companyname2').value;
           let desi2 = document.getElementById('designation_exp2').value;
           let start2 = document.getElementById('date_of_join_exp2').value;
           let end2 = document.getElementById('date_of_coplition_exp2').value;
   
           let items6 = document.getElementsByClassName('required_exp2');
       
           if (name2 != '' || desi2 != '' || start2 != '' || end2 != '') {
               if (name2 == '' || desi2 == '' || start2 == '' || end2 == '') {
                   for (let i=0; i < items6.length; i++) {
                     items6[i].innerHTML = "*";
                   }
                   count++;
               }
           }

    if (count == 0) {
        isvalid = true;
    }
    else {
        isvalid = false;
    }
    return isvalid;
}