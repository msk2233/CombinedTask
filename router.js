let express = require("express");
let app = require("express").Router();
app.use(express.static('public'));
let auth = require('./middlewear/authentication.js');
let tk4 = require('./controllers/staticgrid_route.js')
let tk5 = require('./controllers/Grid_With_Calendar_route.js')
let tk6 = require('./controllers/resultgrid_route.js')
let tk7 = require('./controllers/dynemicgrid_route.js')
let tk8 = require('./controllers/Searching_route.js')
let tk9 = require('./controllers/Delimitersearch_route.js')
let tk13 = require('./controllers/job_application_form_route.js')
let tk14 = require('./controllers/ajaxform_route.js')
let tk15 = require('./controllers/timezone_route.js')
let tk16 = require('./controllers/jsonplaceholder_route.js')
let reg = require('./controllers/register.js')
let login = require('./controllers/login.js')
let rend = require('./controllers/renderpages_route.js')

app.get('/', reg.registerpage)
app.post('/reg_data', reg.register)
app.get('/activate_link', reg.activate)
app.get('/password', reg.getpass)
app.post('/create_password', reg.createpass)
app.get('/login', login.login)
app.get('/forgotpass',rend.forgotpass)
app.get('/forgotpass/check',login.dataforpass)
app.get('/reset',login.reset)
app.get('/password/login', login.login)
app.post('/login_data', login.login_data)
app.get('/dashboard', auth, rend.dashboard);
app.get('/dashboard/dynemictable', auth, rend.dynemictable)
app.get('/dashboard/Javascript_Events', auth, rend.Javascript_Events)
app.get('/dashboard/KuKucube', auth, rend.KuKucube)
app.get('/dashboard/staticgrid', auth, tk4.tk4route)
app.get('/dashboard/Grid_With_Calendar', auth, tk5.tk5route)
app.get('/dashboard/result', auth, tk6.tk6route_main)
app.get('/dashboard/result/detailedresult', auth, tk6.tk6route_detail)
app.get('/dashboard/dynemicgrid_main', auth, tk7.tk7route_main)
app.post('/dashboard/dynemicgrid_main/submit', tk7.tk7route_submit)
app.get('/dashboard/dynemicgrid_main/display', auth, tk7.tk7route)
app.get('/dashboard/Searching', auth, tk8.tk8route_main)
app.post('/dashboard/Searching/Searched_data', auth, tk8.tk8route)
app.get('/dashboard/Delimitersearch', auth, tk9.tk9route_main)
app.post('/dashboard/Delimitersearch/Delimitersearch_output', auth, tk9.tk9route_display)
app.get('/dashboard/ehya_tamplate', auth, rend.ehya_tamplate)
app.get('/dashboard/Awan_Hoster_template', auth, rend.Awan_Hoster_template)
app.get('/dashboard/hirex_tamplate', auth, rend.hirex_tamplate)
app.get('/dashboard/job_application_form', auth, tk13.main)
app.get('/dashboard/job_application_form_main/newform', auth, tk13.insert)
app.post('/dashboard/job_application_form_main/post_data', auth, tk13.insdata)
app.get('/dashboard/job_application_form_main/updateform', auth, tk13.update)
app.get('/fetch', auth, tk13.fetch)
app.post('/dashboard/job_application_form_main/update', auth, tk13.updatedata)
app.get('/dashboard/job_application_form_main/get_state', auth, tk13.get_state);
app.get('/dashboard/job_application_form_main/get_city', auth, tk13.get_city);
app.get('/dashboard/ajax', auth,tk14.main )
app.get('/dashboard/ajax_main/ajax_newform', auth, tk14.insert)
app.post('/dashboard/ajax_main/post_data', auth,tk14.insdata)
app.get('/dashboard/ajax_main/ajax_updateform', auth, tk14.update)
app.get('/fetch', auth,tk14.fetch )
app.post('/dashboard/ajax_main/update', auth,tk14.updatedata)
app.get('/dashboard/ajax_main/get_state', auth,tk14.get_state);
app.get('/dashboard/ajax_main/get_city', auth,  tk14.get_city);
app.get('/dashboard/timezone', auth, tk15.tk15route);
app.get('/dashboard/timezone/converted_timezone', auth, tk15.tk15route_convert);
app.get('/dashboard/jsonplaceholder', auth, tk16.tk16route);
app.get('/dashboard/tictaetoe', auth, rend.TicTaeToe);
app.get('*',rend.err);
module.exports = app;