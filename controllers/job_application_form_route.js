// const { execute, insert } = require('../executequery');
// var backvalidation = require('../middlewear/backendvalidation')

// exports.main = async (req, res) => {
//     res.render('job_application_form_main')
// }
// exports.fetch = async (req, res) => {
//     let result1 = await execute(`select * from basic_detail where application_id = ${id};`);
//     let result2 = await execute(`select * from education where application_id = ${id};`)
//     let result3 = await execute(`select * from workexperience where application_id = ${id};`)
//     let result4 = await execute(`select * from known_language where application_id = ${id};`);
//     let result5 = await execute(`select * from known_technologies where application_id = ${id};`);
//     let result6 = await execute(`select * from  referenceContact where application_id = ${id};`);
//     let result7 = await execute(`select * from  preferences where application_id = ${id};`);
//     res.send({ result1, result2, result3, result4, result5, result6, result7 });
// }
// exports.insert = (req, res) => {
//     submittype = "insert";
//     res.render('job_application_form', { submittype: submittype, id: {} });
// }
// exports.update = (req, res) => {
//     id = req.query.id;
//     submittype = "update";
//     res.render('job_application_form', { submittype: submittype, id: id });
// }
// exports.get_state = async (req, res) => {
//     let data = await execute(`SELECT name,id FROM states ORDER BY id ASC;`);
//     res.send({ data });
// }
// exports.get_city = async (req, res) => {
//     var type = req.query.id;
//     let data1 = await execute(`SELECT city FROM cities where state_id = ${type};`);
//     res.send({ data1: data1 })
// }

// async function backend(req, res,) {
//     if (backvalidation.basicdetail(req.body)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// exports.insdata = async (req, res, next) => {
//     let fail = null;
//     if (backend) {
//         const { fname, lname, designation, address1, address2, email, phno, city, gender, state, rstatus, zipcode, dob, nob_ssc, ps_ssc, percentage_ssc, nob_hsc, ps_hsc, percentage_hsc, coursename_bach, ps_bach, percentage_bach, coursename_mas, ps_mas, percentage_mas, companyname1, designation_exp1, date_of_join_exp1, date_of_coplition_exp1, companyname2, designation_exp2, date_of_join_exp2, date_of_coplition_exp2, companyname3, designation_exp3, date_of_join_exp3, date_of_coplition_exp3, rhindi, whindi, shindi, renglish, wenglish, senglish, rgujarati, wgujarati, sgujarati, phpcheckbox, mysqlcheckbox, laravelcheckbox, oraclecheckbox, php, mysql, laravel, oracle, ref_name_1, ref_name_2, contact_ref_1, contact_ref_2, contact_ref_relation1, contact_ref_relation2, location, notice_period, exp_ctc, cur_ctc, department } = req.body;

//         //INSERT INTO BASIC DETAIL TABLE

//         var basic_detail_query = `insert into basic_detail(fname,lname,designation,address1,address2,email,phno,city,state,gender,zipcode,rstatus,dob) values ('${fname}','${lname}','${designation}','${address1}','${address2}','${email}','${phno}','${city}','${state}','${gender}','${zipcode}','${rstatus}','${dob}')`;
//         let insertedid = await insert(basic_detail_query);

//         // INSERT INTO EDUCATION TABLE

//         var educationlevel = [];
//         var board_course = [];
//         var passing_year = [];
//         var percentage = [];
//         if (nob_ssc != '') {
//             educationlevel.push("1");
//             board_course.push(nob_ssc);
//             passing_year.push(ps_ssc);
//             percentage.push(percentage_ssc);
//         }
//         if (nob_hsc != '') {
//             educationlevel.push("2");
//             board_course.push(nob_hsc);
//             passing_year.push(ps_hsc);
//             percentage.push(percentage_hsc);
//         }
//         if (coursename_bach != '') {
//             educationlevel.push("3");
//             board_course.push(coursename_bach);
//             passing_year.push(ps_bach);
//             percentage.push(percentage_bach);
//         }
//         if (coursename_mas != '') {
//             educationlevel.push("4");
//             board_course.push(coursename_mas);
//             passing_year.push(ps_mas);
//             percentage.push(percentage_mas);
//         }
//         for (let i = 0; i < educationlevel.length; i++) {
//             var education_query = `insert into education(application_id,educationlevel,board_course,passing_year,percentage) values (${insertedid},${educationlevel[i]},'${board_course[i]}','${passing_year[i]}',${percentage[i]});`

//             let data2 = await execute(education_query);
//         }


//         // INSERT INTO WORK EXPERIENCE TABLE

//         var company_name = [];
//         var designation_exp = [];
//         var date_of_join_exp = [];
//         var date_of_coplition_exp = [];

//         if (companyname1 != '') {
//             company_name.push(companyname1);
//             designation_exp.push(designation_exp1);
//             date_of_join_exp.push(date_of_join_exp1);
//             date_of_coplition_exp.push(date_of_coplition_exp1);
//         }
//         if (companyname2 != '') {
//             company_name.push(companyname2);
//             designation_exp.push(designation_exp2);
//             date_of_join_exp.push(date_of_join_exp2);
//             date_of_coplition_exp.push(date_of_coplition_exp2);
//         }
//         if (companyname3 != '') {
//             company_name.push(companyname3);
//             designation_exp.push(designation_exp3);
//             date_of_join_exp.push(date_of_join_exp3);
//             date_of_coplition_exp.push(date_of_coplition_exp3);
//         }

//         for (let element = 0; element < company_name.length; element++) {
//             var workexperience_query = `insert into  workexperience(application_id,ComapanyName,Designation,Dateofjoining,Dateofcompliting) values (${insertedid},'${company_name[element]}','${designation_exp[element]}','${date_of_join_exp[element]}','${date_of_coplition_exp[element]}');`
//             let data3 = await execute(workexperience_query);
//         }

//         //INSERT INTO KNOWN LANGUAGE TABLE
//         var lan = [];
//         var hin = [];
//         var eng = [];
//         var guj = [];

//         if (rhindi != undefined || whindi != undefined || shindi != undefined) {
//             hin.push("hindi");

//             if (rhindi != undefined) {
//                 hin.push(1)
//             }
//             else {
//                 hin.push(0)
//             }
//             if (whindi != undefined) {
//                 hin.push(1)
//             }
//             else {
//                 hin.push(0)
//             }
//             if (shindi != undefined) {
//                 hin.push(1)
//             }
//             else {
//                 hin.push(0)
//             }
//         }
//         lan.push(hin);
//         if (renglish != undefined || wenglish != undefined || senglish != undefined) {
//             eng.push("english");
//             if (renglish != undefined) {
//                 eng.push(1)
//             }
//             else {
//                 eng.push(0)
//             }
//             if (wenglish != undefined) {
//                 eng.push(1)
//             }
//             else {
//                 eng.push(0)
//             }
//             if (senglish != undefined) {
//                 eng.push(1)
//             }
//             else {
//                 eng.push(0)
//             }
//             lan.push(eng);
//         }
//         if (rgujarati != undefined || wgujarati != undefined || sgujarati != undefined) {
//             guj.push("guj");
//             if (rgujarati != undefined) {
//                 guj.push(1)
//             }
//             else {
//                 guj.push(0)
//             }
//             if (wgujarati != undefined) {
//                 guj.push(1)
//             }
//             else {
//                 guj.push(0)
//             }
//             if (sgujarati != undefined) {
//                 guj.push(1)
//             }
//             else {
//                 guj.push(0)
//             }
//             lan.push(guj);
//         }
//         var j = 0;

//         for (let i = 0; i < lan.length; i++) {
//             var language = `insert into known_language(application_id,language_name,can_read,can_write,can_speak) values (${insertedid},'${lan[i][j]}','${lan[i][j + 1]}','${lan[i][j + 1]}','${lan[i][j + 2]}');`
//             let data4 = await execute(language);
//         }


//         //INSERT INTO TECHNOLOGIES TABLE
//         var tech = [];
//         var tech1 = [];
//         var tech2 = [];
//         var tech3 = [];
//         var tech4 = [];

//         if (phpcheckbox != undefined) {
//             tech1.push("PHP");
//             tech1.push(php);
//             tech.push(tech1)
//         }
//         if (mysqlcheckbox != undefined) {
//             tech2.push("MySql");
//             tech2.push(mysql);
//             tech.push(tech2)
//         }
//         if (laravelcheckbox != undefined) {
//             tech3.push("Laravel");
//             tech3.push(laravel);
//             tech.push(tech3)
//         }
//         if (oraclecheckbox != undefined) {
//             tech4.push("Oracle");
//             tech4.push(oracle);
//             tech.push(tech4)
//         }
//         for (let i = 0; i < tech.length; i++) {
//             var techno = `insert into known_technologies(application_id,Name_of_technology,Experties) values (${insertedid},'${tech[i][j]}','${tech[i][j + 1]}');`
//             let data5 = await execute(techno);
//         }

//         //INSERT INTO KNOWN REFERENCE CONTACT TABLE
//         var refcontact = [];
//         var refcontact1 = [];
//         var refcontact2 = [];

//         if (ref_name_1 != '') {
//             refcontact1.push(ref_name_1);
//             refcontact1.push(contact_ref_1);
//             refcontact1.push(contact_ref_relation1);
//             refcontact.push(refcontact1)
//         }
//         if (ref_name_2 != '') {
//             refcontact2.push(ref_name_2);
//             refcontact2.push(contact_ref_2);
//             refcontact2.push(contact_ref_relation2);
//             refcontact.push(refcontact2)
//         }
//         for (let i = 0; i < refcontact.length; i++) {
//             var ref = `insert into referenceContact(application_id,NameOfContact,ContactNumber,Relation) values (${insertedid},'${refcontact[i][j]}','${refcontact[i][j + 1]}','${refcontact[i][j + 2]}');`
//             let data6 = await execute(ref);
//         }

//         //INSERT INTO KNOWN PREFERENCE TABLE
//         let Location = "";
//         if (location) {
//             Location = location.toString();
//         }
//         var preference = `insert into preferences(application_id,prefered_location,notice_period,expected_ctc,curr_ctc,department) values(${insertedid},'${Location}','${notice_period}','${exp_ctc}','${cur_ctc}','${department}');`;

//         let data7 = await execute(preference);


//         fail = 'no';
//         res.json({ fail });
//     }
//     else {
//         res.json(fail);
//     }
// }
// exports.updatedata = async (req, res) => {
//     let fail = null;
//     if (backend) {
//         const { fname, lname, designation, address1, address2, email, phno, city, gender, state, rstatus, zipcode, dob, nob_ssc, ps_ssc, percentage_ssc, nob_hsc, ps_hsc, percentage_hsc, coursename_bach, ps_bach, percentage_bach, coursename_mas, ps_mas, percentage_mas, companyname1, designation_exp1, date_of_join_exp1, date_of_coplition_exp1, companyname2, designation_exp2, date_of_join_exp2, date_of_coplition_exp2, companyname3, designation_exp3, date_of_join_exp3, date_of_coplition_exp3, rhindi, whindi, shindi, renglish, wenglish, senglish, rgujarati, wgujarati, sgujarati, phpcheckbox, mysqlcheckbox, laravelcheckbox, oraclecheckbox, php, mysql, laravel, oracle, ref_name_1, ref_name_2, contact_ref_1, contact_ref_2, contact_ref_relation1, contact_ref_relation2, location, notice_period, exp_ctc, cur_ctc, department, id } = req.body;

//         var State = await execute(`SELECT name FROM states where id=${state}`);


//         //UPDATE BASIC DETAIL
//         var updatebasicdetail = `update basic_detail set fname='${fname}',lname='${lname}',designation='${designation}',address1='${address1}',address2='${address2}',email='${email}',phno='${phno}',city='${city}',state='${State[0].name}',gender='${gender}',zipcode='${zipcode}',rstatus='${rstatus}',dob='${dob}' where application_id=${id};`

//         await execute(updatebasicdetail);

//         //UPDATE EDUCATION DETAIL
//         var educationlevel = [];
//         var board_course = [];
//         var passing_year = [];
//         var percentage = [];
//         if (nob_ssc != '') {
//             educationlevel.push("1");
//             board_course.push(nob_ssc);
//             passing_year.push(ps_ssc);
//             percentage.push(percentage_ssc);
//         }
//         if (nob_hsc != '') {
//             educationlevel.push("2");
//             board_course.push(nob_hsc);
//             passing_year.push(ps_hsc);
//             percentage.push(percentage_hsc);
//         }
//         if (coursename_bach != '') {
//             educationlevel.push("3");
//             board_course.push(coursename_bach);
//             passing_year.push(ps_bach);
//             percentage.push(percentage_bach);
//         }
//         if (coursename_mas != '') {
//             educationlevel.push("4");
//             board_course.push(coursename_mas);
//             passing_year.push(ps_mas);
//             percentage.push(percentage_mas);
//         }
//         for (let i = 0; i < educationlevel.length; i++) {
//             var updateeducation = `update education set application_id=${id},educationlevel='${educationlevel[i]}',board_course='${board_course[i]}',passing_year='${passing_year[i]}',percentage='${percentage[i]}' where application_id=${id} and educationlevel='${educationlevel[i]}';`;

//             await execute(updateeducation);
//         }

//         //UPDATE LANGUAGE

//         var lan = [];
//         var hin = [];
//         var eng = [];
//         var guj = [];

//         if (rhindi != undefined || whindi != undefined || shindi != undefined) {
//             hin.push("hindi");

//             if (rhindi != undefined) {
//                 hin.push(1)
//             }
//             else {
//                 hin.push(0)
//             }
//             if (whindi != undefined) {
//                 hin.push(1)
//             }
//             else {
//                 hin.push(0)
//             }
//             if (shindi != undefined) {
//                 hin.push(1)
//             }
//             else {
//                 hin.push(0)
//             }
//         }
//         lan.push(hin);
//         if (renglish != undefined || wenglish != undefined || senglish != undefined) {
//             eng.push("english");
//             if (renglish != undefined) {
//                 eng.push(1)
//             }
//             else {
//                 eng.push(0)
//             }
//             if (wenglish != undefined) {
//                 eng.push(1)
//             }
//             else {
//                 eng.push(0)
//             }
//             if (senglish != undefined) {
//                 eng.push(1)
//             }
//             else {
//                 eng.push(0)
//             }
//             lan.push(eng);
//         }
//         if (rgujarati != undefined || wgujarati != undefined || sgujarati != undefined) {
//             guj.push("guj");
//             if (rgujarati != undefined) {
//                 guj.push(1)
//             }
//             else {
//                 guj.push(0)
//             }
//             if (wgujarati != undefined) {
//                 guj.push(1)
//             }
//             else {
//                 guj.push(0)
//             }
//             if (sgujarati != undefined) {
//                 guj.push(1)
//             }
//             else {
//                 guj.push(0)
//             }
//             lan.push(guj);
//         }
//         for (let i = 0; i < lan.length; i++) {
//             var j = 0;

//             var languageupdate = `update known_language set application_id=${id},language_name='${lan[i][j]}',can_read='${lan[i][j + 1]}',can_write='${lan[i][j + 2]}',can_speak='${lan[i][j + 3]}' where application_id=${id} and language_name='${lan[i][j]}';`;
//             await execute(languageupdate);
//         }

//         //UPDATE TECHNOLOGY
//         var tech = [];
//         var tech1 = [];
//         var tech2 = [];
//         var tech3 = [];
//         var tech4 = [];

//         if (phpcheckbox != undefined) {
//             tech1.push("PHP");
//             tech1.push(php);
//             tech.push(tech1)
//         }
//         if (mysqlcheckbox != undefined) {
//             tech2.push("MySql");
//             tech2.push(mysql);
//             tech.push(tech2)
//         }
//         if (laravelcheckbox != undefined) {
//             tech3.push("Laravel");
//             tech3.push(laravel);
//             tech.push(tech3)
//         }
//         if (oraclecheckbox != undefined) {
//             tech4.push("Oracle");
//             tech4.push(oracle);
//             tech.push(tech4)
//         }
//         for (let i = 0; i < tech.length; i++) {
//             var techupdate = `update known_technologies set application_id=${id},Name_of_technology='${tech[i][j]}',Experties='${tech[i][j + 1]}' where application_id=${id} and Name_of_technology='${tech[i][j]}';`;
//             await execute(techupdate);
//         }

//         // UPDATE PREFERANCE

//         const Location = location.toString();
//         var updatepreference = `update preferences set application_id=${id},prefered_location='${Location}',notice_period='${notice_period}',expected_ctc='${exp_ctc}',curr_ctc='${cur_ctc}',department='${department}' where application_id=${id};`;
//         await execute(updatepreference);

//         fail = 'no';
//         res.json({ fail });
//     }
//     else {
//         res.json({ fail });
//     }
// }
const { execute, insert } = require('../executequery');
var backvalidation = require('../middlewear/backendvalidation');

exports.main = async (req, res) => {
    res.render('job_application_form_main');
}

exports.fetch = async (req, res) => {
    const { id } = req.query;  // Assuming id is passed in query parameters
    let result1 = await execute(`SELECT * FROM basic_detail WHERE application_id = ${id};`);
    let result2 = await execute(`SELECT * FROM education WHERE application_id = ${id};`);
    let result3 = await execute(`SELECT * FROM workexperience WHERE application_id = ${id};`);
    let result4 = await execute(`SELECT * FROM known_language WHERE application_id = ${id};`);
    let result5 = await execute(`SELECT * FROM known_technologies WHERE application_id = ${id};`);
    let result6 = await execute(`SELECT * FROM referenceContact WHERE application_id = ${id};`);
    let result7 = await execute(`SELECT * FROM preferences WHERE application_id = ${id};`);
    res.send({ result1, result2, result3, result4, result5, result6, result7 });
}

exports.insert = (req, res) => {
    submittype = "insert";
    res.render('job_application_form', { submittype: submittype, id: {} });
}

exports.update = (req, res) => {
    id = req.query.id;
    submittype = "update";
    res.render('job_application_form', { submittype: submittype, id: id });
}

exports.get_state = async (req, res) => {
    let data = await execute(`SELECT name, id FROM states ORDER BY id ASC;`);
    res.send({ data });
}

exports.get_city = async (req, res) => {
    var type = req.query.id;
    let data1 = await execute(`SELECT city FROM cities WHERE state_id = ${type};`);
    res.send({ data1 });
}

async function backend(req, res) {
    if (backvalidation.basicdetail(req.body)) {
        return true;
    } else {
        return false;
    }
}

exports.insdata = async (req, res, next) => {
    let fail = null;
    if (backend(req, res)) {
        console.log(req.body);
        const { fname, lname, designation, address1, address2, email, phno, city, gender, state, rstatus, zipcode, dob, nob_ssc, ps_ssc, percentage_ssc, nob_hsc, ps_hsc, percentage_hsc, coursename_bach, ps_bach, percentage_bach, coursename_mas, ps_mas, percentage_mas, companyname1, designation_exp1, date_of_join_exp1, date_of_coplition_exp1, companyname2, designation_exp2, date_of_join_exp2, date_of_coplition_exp2, companyname3, designation_exp3, date_of_join_exp3, date_of_coplition_exp3, rhindi, whindi, shindi, renglish, wenglish, senglish, rgujarati, wgujarati, sgujarati, phpcheckbox, mysqlcheckbox, laravelcheckbox, oraclecheckbox, php, mysql, laravel, oracle, ref_name_1, ref_name_2, contact_ref_1, contact_ref_2, contact_ref_relation1, contact_ref_relation2, location, notice_period, exp_ctc, cur_ctc, department } = req.body;

        //INSERT INTO BASIC DETAIL TABLE
        var basic_detail_query = `INSERT INTO basic_detail(fname, lname, designation, address1, address2, email, phno, city, state, gender, zipcode, rstatus, dob) VALUES ('${fname}', '${lname}', '${designation}', '${address1}', '${address2}', '${email}', '${phno}', '${city}', '${state}', '${gender}', '${zipcode}', '${rstatus}', '${dob}')`;
        let insertedid = await insert(basic_detail_query);

        // INSERT INTO EDUCATION TABLE
        let education_queries = [];
        if (nob_ssc != '') {
            education_queries.push(`(${insertedid}, 1, '${nob_ssc}', '${ps_ssc}', ${percentage_ssc})`);
        }
        if (nob_hsc != '') {
            education_queries.push(`(${insertedid}, 2, '${nob_hsc}', '${ps_hsc}', ${percentage_hsc})`);
        }
        if (coursename_bach != '') {
            education_queries.push(`(${insertedid}, 3, '${coursename_bach}', '${ps_bach}', ${percentage_bach})`);
        }
        if (coursename_mas != '') {
            education_queries.push(`(${insertedid}, 4, '${coursename_mas}', '${ps_mas}', ${percentage_mas})`);
        }
        if (education_queries.length > 0) {
            var education_query = `INSERT INTO education(application_id, educationlevel, board_course, passing_year, percentage) VALUES ${education_queries.join(', ')};`;
            await execute(education_query);
        }

        // INSERT INTO WORK EXPERIENCE TABLE
        let work_experience_queries = [];
        if (companyname1 != '') {
            work_experience_queries.push(`(${insertedid}, '${companyname1}', '${designation_exp1}', '${date_of_join_exp1}', '${date_of_coplition_exp1}')`);
        }
        if (companyname2 != '') {
            work_experience_queries.push(`(${insertedid}, '${companyname2}', '${designation_exp2}', '${date_of_join_exp2}', '${date_of_coplition_exp2}')`);
        }
        if (companyname3 != '') {
            work_experience_queries.push(`(${insertedid}, '${companyname3}', '${designation_exp3}', '${date_of_join_exp3}', '${date_of_coplition_exp3}')`);
        }
        if (work_experience_queries.length > 0) {
            var workexperience_query = `INSERT INTO workexperience(application_id, ComapanyName, Designation, Dateofjoining, Dateofcompliting) VALUES ${work_experience_queries.join(', ')};`;
            await execute(workexperience_query);
        }

        // INSERT INTO KNOWN LANGUAGE TABLE
        let languages = [];
        if (rhindi || whindi || shindi) {
            languages.push(`(${insertedid}, 'hindi', ${rhindi ? 1 : 0}, ${whindi ? 1 : 0}, ${shindi ? 1 : 0})`);
        }
        if (renglish || wenglish || senglish) {
            languages.push(`(${insertedid}, 'english', ${renglish ? 1 : 0}, ${wenglish ? 1 : 0}, ${senglish ? 1 : 0})`);
        }
        if (rgujarati || wgujarati || sgujarati) {
            languages.push(`(${insertedid}, 'guj', ${rgujarati ? 1 : 0}, ${wgujarati ? 1 : 0}, ${sgujarati ? 1 : 0})`);
        }
        if (languages.length > 0) {
            var language_query = `INSERT INTO known_language(application_id, language_name, can_read, can_write, can_speak) VALUES ${languages.join(', ')};`;
            await execute(language_query);
        }

        // INSERT INTO TECHNOLOGIES TABLE
        let technologies = [];
        if (phpcheckbox) {
            technologies.push(`(${insertedid}, 'PHP', '${php}')`);
        }
        if (mysqlcheckbox) {
            technologies.push(`(${insertedid}, 'MySql', '${mysql}')`);
        }
        if (laravelcheckbox) {
            technologies.push(`(${insertedid}, 'Laravel', '${laravel}')`);
        }
        if (oraclecheckbox) {
            technologies.push(`(${insertedid}, 'Oracle', '${oracle}')`);
        }
        if (technologies.length > 0) {
            var techno_query = `INSERT INTO known_technologies(application_id, Name_of_technology, Experties) VALUES ${technologies.join(', ')};`;
            await execute(techno_query);
        }

        // INSERT INTO REFERENCE CONTACT TABLE
        let reference_contacts = [];
        if (ref_name_1 != '') {
            reference_contacts.push(`(${insertedid}, '${ref_name_1}', '${contact_ref_1}', '${contact_ref_relation1}')`);
        }
        if (ref_name_2 != '') {
            reference_contacts.push(`(${insertedid}, '${ref_name_2}', '${contact_ref_2}', '${contact_ref_relation2}')`);
        }
        if (reference_contacts.length > 0) {
            var ref_query = `INSERT INTO referenceContact(application_id, NameOfContact, ContactNumber, Relation) VALUES ${reference_contacts.join(', ')};`;
            await execute(ref_query);
        }

        // INSERT INTO PREFERENCE TABLE
        var preference_query = `INSERT INTO preferences(application_id, prefered_location, notice_period, expected_ctc, curr_ctc, department) VALUES (${insertedid}, '${location}', '${notice_period}', '${exp_ctc}', '${cur_ctc}', '${department}');`;
        await execute(preference_query);

        fail = "Inserted";
        res.render('job_application_form_main', { fail: fail });
    } else {
        fail = "Fail";
        res.render('job_application_form_main', { fail: fail });
    }
}

exports.updatedata = async (req, res, next) => {
    let fail = null;
    if (backend(req, res)) {
        const { application_id, fname, lname, designation, address1, address2, email, phno, city, gender, state, rstatus, zipcode, dob, nob_ssc, ps_ssc, percentage_ssc, nob_hsc, ps_hsc, percentage_hsc, coursename_bach, ps_bach, percentage_bach, coursename_mas, ps_mas, percentage_mas, companyname1, designation_exp1, date_of_join_exp1, date_of_coplition_exp1, companyname2, designation_exp2, date_of_join_exp2, date_of_coplition_exp2, companyname3, designation_exp3, date_of_join_exp3, date_of_coplition_exp3, rhindi, whindi, shindi, renglish, wenglish, senglish, rgujarati, wgujarati, sgujarati, phpcheckbox, mysqlcheckbox, laravelcheckbox, oraclecheckbox, php, mysql, laravel, oracle, ref_name_1, ref_name_2, contact_ref_1, contact_ref_2, contact_ref_relation1, contact_ref_relation2, location, notice_period, exp_ctc, cur_ctc, department } = req.body;

        // Update or Insert Basic Detail
        let basic_detail = await execute(`SELECT application_id FROM basic_detail WHERE application_id = ${application_id};`);
        if (basic_detail.length > 0) {
            var basic_detail_query = `UPDATE basic_detail SET fname='${fname}', lname='${lname}', designation='${designation}', address1='${address1}', address2='${address2}', email='${email}', phno='${phno}', city='${city}', state='${state}', gender='${gender}', zipcode='${zipcode}', rstatus='${rstatus}', dob='${dob}' WHERE application_id = ${application_id};`;
            await execute(basic_detail_query);
        } else {
            var basic_detail_query = `INSERT INTO basic_detail(application_id, fname, lname, designation, address1, address2, email, phno, city, state, gender, zipcode, rstatus, dob) VALUES (${application_id}, '${fname}', '${lname}', '${designation}', '${address1}', '${address2}', '${email}', '${phno}', '${city}', '${state}', '${gender}', '${zipcode}', '${rstatus}', '${dob}');`;
            await insert(basic_detail_query);
        }

        // Update or Insert Education
        await execute(`DELETE FROM education WHERE application_id = ${application_id};`);
        let education_queries = [];
        if (nob_ssc != '') {
            education_queries.push(`(${application_id}, 1, '${nob_ssc}', '${ps_ssc}', ${percentage_ssc})`);
        }
        if (nob_hsc != '') {
            education_queries.push(`(${application_id}, 2, '${nob_hsc}', '${ps_hsc}', ${percentage_hsc})`);
        }
        if (coursename_bach != '') {
            education_queries.push(`(${application_id}, 3, '${coursename_bach}', '${ps_bach}', ${percentage_bach})`);
        }
        if (coursename_mas != '') {
            education_queries.push(`(${application_id}, 4, '${coursename_mas}', '${ps_mas}', ${percentage_mas})`);
        }
        if (education_queries.length > 0) {
            var education_query = `INSERT INTO education(application_id, educationlevel, board_course, passing_year, percentage) VALUES ${education_queries.join(', ')};`;
            await execute(education_query);
        }

        // Update or Insert Work Experience
        await execute(`DELETE FROM workexperience WHERE application_id = ${application_id};`);
        let work_experience_queries = [];
        if (companyname1 != '') {
            work_experience_queries.push(`(${application_id}, '${companyname1}', '${designation_exp1}', '${date_of_join_exp1}', '${date_of_coplition_exp1}')`);
        }
        if (companyname2 != '') {
            work_experience_queries.push(`(${application_id}, '${companyname2}', '${designation_exp2}', '${date_of_join_exp2}', '${date_of_coplition_exp2}')`);
        }
        if (companyname3 != '') {
            work_experience_queries.push(`(${application_id}, '${companyname3}', '${designation_exp3}', '${date_of_join_exp3}', '${date_of_coplition_exp3}')`);
        }
        if (work_experience_queries.length > 0) {
            var workexperience_query = `INSERT INTO workexperience(application_id, ComapanyName, Designation, Dateofjoining, Dateofcompliting) VALUES ${work_experience_queries.join(', ')};`;
            await execute(workexperience_query);
        }

        // Update or Insert Known Language
        await execute(`DELETE FROM known_language WHERE application_id = ${application_id};`);
        let languages = [];
        if (rhindi || whindi || shindi) {
            languages.push(`(${application_id}, 'hindi', ${rhindi ? 1 : 0}, ${whindi ? 1 : 0}, ${shindi ? 1 : 0})`);
        }
        if (renglish || wenglish || senglish) {
            languages.push(`(${application_id}, 'english', ${renglish ? 1 : 0}, ${wenglish ? 1 : 0}, ${senglish ? 1 : 0})`);
        }
        if (rgujarati || wgujarati || sgujarati) {
            languages.push(`(${application_id}, 'guj', ${rgujarati ? 1 : 0}, ${wgujarati ? 1 : 0}, ${sgujarati ? 1 : 0})`);
        }
        if (languages.length > 0) {
            var language_query = `INSERT INTO known_language(application_id, language_name, can_read, can_write, can_speak) VALUES ${languages.join(', ')};`;
            await execute(language_query);
        }

        // Update or Insert Known Technologies
        await execute(`DELETE FROM known_technologies WHERE application_id = ${application_id};`);
        let technologies = [];
        if (phpcheckbox) {
            technologies.push(`(${application_id}, 'PHP', '${php}')`);
        }
        if (mysqlcheckbox) {
            technologies.push(`(${application_id}, 'MySql', '${mysql}')`);
        }
        if (laravelcheckbox) {
            technologies.push(`(${application_id}, 'Laravel', '${laravel}')`);
        }
        if (oraclecheckbox) {
            technologies.push(`(${application_id}, 'Oracle', '${oracle}')`);
        }
        if (technologies.length > 0) {
            var techno_query = `INSERT INTO known_technologies(application_id, Name_of_technology, Experties) VALUES ${technologies.join(', ')};`;
            await execute(techno_query);
        }

        // Update or Insert Reference Contact
        await execute(`DELETE FROM referenceContact WHERE application_id = ${application_id};`);
        let reference_contacts = [];
        if (ref_name_1 != '') {
            reference_contacts.push(`(${application_id}, '${ref_name_1}', '${contact_ref_1}', '${contact_ref_relation1}')`);
        }
        if (ref_name_2 != '') {
            reference_contacts.push(`(${application_id}, '${ref_name_2}', '${contact_ref_2}', '${contact_ref_relation2}')`);
        }
        if (reference_contacts.length > 0) {
            var ref_query = `INSERT INTO referenceContact(application_id, NameOfContact, ContactNumber, Relation) VALUES ${reference_contacts.join(', ')};`;
            await execute(ref_query);
        }

        // Update or Insert Preferences
        let preferences = await execute(`SELECT application_id FROM preferences WHERE application_id = ${application_id};`);
        if (preferences.length > 0) {
            var preference_query = `UPDATE preferences SET prefered_location='${location}', notice_period='${notice_period}', expected_ctc='${exp_ctc}', curr_ctc='${cur_ctc}', department='${department}' WHERE application_id = ${application_id};`;
            await execute(preference_query);
        } else {
            var preference_query = `INSERT INTO preferences(application_id, prefered_location, notice_period, expected_ctc, curr_ctc, department) VALUES (${application_id}, '${location}', '${notice_period}', '${exp_ctc}', '${cur_ctc}', '${department}');`;
            await execute(preference_query);
        }

        fail = "Updated";
        res.render('job_application_form_main', { fail: fail });
    } else {
        fail = "Fail";
        res.render('job_application_form_main', { fail: fail });
    }
}