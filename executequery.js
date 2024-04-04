var mysql = require('mysql')

async function execute(query,values) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Dev@123",
        database: "registration",
        dateStrings : true
    });


    con.connect(function (err) {
        if (err) throw err;
    });

    let res = new Promise((resolve, reject) => {
        con.query(query,values, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        })
    })

    let result = res.then((result)=>{return result}).catch((err)=>{return "Error in query"});

    return result;
}
async function insert(query) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Dev@123",
        database: "registration"
    });


    con.connect(function (err) {
        if (err) throw err;
    });

    let res = new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result.insertId);
            }
        })
    })
    let result = res.then((result)=>{return result}).catch((err)=>{return err});
    return result;
}

module.exports = {execute,insert};