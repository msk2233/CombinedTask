function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    if (submittype == 'update'){
      document.getElementById("nextBtn").innerHTML = "Update";
    }
    else{
      document.getElementById("nextBtn").innerHTML = "Submit";
    }
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n)
}
function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) 
  {
    return false;
  }
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    submitdata();
    return false;
  }
  showTab(currentTab);
}
function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
function validateForm() {
  let count = 0;
  var isvalid = true;
  //BASICDETAIL REQUIRED  VALIDATION
  var requiredfields = document.getElementsByClassName('req');
  for (let i = 0; i < requiredfields.length; i++) {
      const field = requiredfields[i];

      var fieldname = field.id;
      var errmsgid = fieldname + 'error';
      var errmsgelement = document.getElementById(errmsgid);
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
  var email = document.getElementById('email').value;
  if (email != "") {
      var p = document.getElementById('emailerror');
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
  var phno = document.getElementById("phonenumber").value;
  if (phno != "") {
      var phnoerror = document.getElementById('phonenumbererror');
      var regx = /^[6-9]\d{9}$/;
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
  var zipcode = document.getElementById("zipcode").value;
  if (zipcode != "") {
      var zipcodeerror = document.getElementById('zipcodeerror');
      var zipreg = /^[1-9][0-9]{5}$/;
      if (zipreg.test(zipcode)) {
      }
      else {
          zipcodeerror.style.color = "orange";
          zipcodeerror.innerText = "wrong format";
          count++;

      }
  }
  //date of birth validation 
  var dob = document.getElementById("dob").value;
  if (dob != "") {
      var doberror = document.getElementById('doberror');
      var dobreg = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
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
  var nob_ssc = document.getElementById('nob_ssc').value;
  var ps_ssc = document.getElementById('ps_ssc').value;
  var tage_ssc = document.getElementById('tage_ssc').value;
  var items1 = document.getElementsByClassName('requiredssc');
  if ((nob_ssc != '' && (ps_ssc == '' || tage_ssc == '')) || (ps_ssc != '' && (nob_ssc == '' || tage_ssc == '')) || (tage_ssc != '' && (ps_ssc == '' || nob_ssc == ''))) {
      for (var i=0; i < items1.length; i++) {
        items1[i].innerHTML = "*";
      }
      count++;
  }
  //hsc
  var nob_hsc = document.getElementById('nob_hsc').value;
  var ps_hsc = document.getElementById('ps_hsc').value;
  var tage_hsc = document.getElementById('tage_hsc').value;
  var items2 = document.getElementsByClassName('requiredhsc');
  if ((nob_hsc != '' && (ps_hsc == '' || tage_hsc == '')) || (ps_hsc != '' && (nob_hsc == '' || tage_hsc == '')) || (tage_hsc != '' && (ps_hsc == '' || nob_hsc == ''))) {
      for (var i=0; i < items2.length; i++) {
        items2[i].innerHTML = "*";
      }
      count++;
  }
  //bechlor
  var coursename_bach = document.getElementById('coursename_bach').value;
  var ps_bach = document.getElementById('ps_bach').value;
  var tage_bach = document.getElementById('tage_bach').value;
  var items3 = document.getElementsByClassName('requiredbech');
  if ((coursename_bach != '' && (ps_bach == '' || tage_bach == '')) || (ps_bach != '' && ( coursename_bach == '' || tage_bach == '')) || (tage_bach != '' && (ps_bach == '' || coursename_bach == ''))) {
      for (var i=0; i < items3.length; i++) {
        items3[i].innerHTML = "*";
      }
      count++;
  }
  //master
  var coursename_mas = document.getElementById('coursename_mas').value;
  var ps_mas = document.getElementById('ps_mas').value;
  var tage_mas = document.getElementById('tage_mas').value;
  var items4 = document.getElementsByClassName('requiredmas');
  if (coursename_mas != '' || ps_mas != '' || tage_mas != '') {
      if (coursename_mas == '' || ps_mas == '' || tage_mas == '') {
          for (var i=0; i < items4.length; i++) {
            items4[i].innerHTML = "*";
          }
          count++;
      }
  }
  // WORK EXPERIENCE VALIDATIONS
      //row1
      var name1 = document.getElementById('companyname1').value;
      var desi1 = document.getElementById('designation_exp1').value;
      var start1 = document.getElementById('date_of_join_exp1').value;
      var end1 = document.getElementById('date_of_coplition_exp1').value;

      var items5 = document.getElementsByClassName('required_exp1');
      if (name1 != '' || desi1 != '' || start1 != '' || end1 != '') {
          if (name1 == '' || desi1 == '' || start1 == '' || end1 == '') {
              for (var i=0; i < items5.length; i++) {
                items5[i].innerHTML = "*";
              }
              count++;
          }
      }
         //row2
         var name2 = document.getElementById('companyname2').value;
         var desi2 = document.getElementById('designation_exp2').value;
         var start2 = document.getElementById('date_of_join_exp2').value;
         var end2 = document.getElementById('date_of_coplition_exp2').value;
 
         var items6 = document.getElementsByClassName('required_exp2');
     
         if (name2 != '' || desi2 != '' || start2 != '' || end2 != '') {
             if (name2 == '' || desi2 == '' || start2 == '' || end2 == '') {
                 for (var i=0; i < items6.length; i++) {
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
//SUBMITTING DATA USING FETCH AND DISPLAY RESPONSE IF DATA HAS BEEN INSERTED INTO DATABASE SUCCESSFULLY AND DISPLAY ERROR MESSAGE WHILE BACKEND VALIDATION IS NOT SATISFIED
async function submitdata() {
  //FETCH URL AND POST THE DATA 
  var form = document.getElementById('regForm');
    const formData = new URLSearchParams(new FormData(form));
    console.log(formData);
    if (submittype == 'insert'){
      var url = `${location.origin}/post_data`;
      var res1 = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      });
      var response = await res1.json();
      //BACKEND VALIDATION ERROR 
      if (response.fail == null) {
        form.style.visibility = "hidden";
        document.getElementById('response').innerText = "ERROR IN YOUR INPUT";
      }
      //RESPONSE FOR SUCCESS OF SUBMIT 
       if (response.fail == "no") {
           form.style.visibility = "hidden";
           document.getElementById('response').innerText = "YOUR RESPONSE HAVE BEEN SUBMITTED";
       }
    }
    else{
      var url = `${location.origin}/update_data`
      var res1 = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      });
      var response = await res1.json();
      //BACKEND VALIDATION ERROR 
      if (response.fail == null) {
        form.style.visibility = "hidden";
        document.getElementById('response').innerText = "ERROR IN YOUR INPUT";
      }
      //RESPONSE FOR SUCCESS OF SUBMIT 
       if (response.fail == "no") {
           form.style.visibility = "hidden";
           document.getElementById('response').innerText = "YOUR DATA HAVE BEEN UPDATED";
       }
    }
  }
//FOR DISPLAYING STATES 
async function state() {
  var url = await fetch(`${location.origin}/get_state`)
      .then(resp => resp.json())
  var sl = document.getElementById('state');
  Object.keys(url).forEach(key => {
      Object.keys(url[key]).forEach(key1 => {
          var newOption = new Option(url[key][key1].name, url[key][key1].id, false, false);
          newOption.setAttribute("name","statename")
          sl.appendChild(newOption);
          
      })
  })

}
//FOR DISPLAYING CITIES WHEN CLICK ON STATE
async function selectcity(id) {
  var url = await fetch(`${location.origin}/get_city/?id=${id}`)
      .then(resp => resp.json())
  var sl = document.getElementById('city');
  sl.innerHTML = null;
  Object.keys(url).forEach(key => {
      Object.keys(url[key]).forEach(key1 => {
          var newOption = new Option(url[key][key1].city, url[key][key1].city, false, false);
          newOption.setAttribute("name","cityname[]")
          sl.appendChild(newOption);
      })
  })
}
//ENABLING RADIO BUTTON OF TECHNOLOGY WHEN WE SELECT CORRESPONDING CHECKBOX
function enableradio(check) {
  const radios = check.closest('tr').querySelectorAll('input[type="radio"]');
  radios.forEach(radio => {
      radio.disabled = !check.checked;
  });
}
