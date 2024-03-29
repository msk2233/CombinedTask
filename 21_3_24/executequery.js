var mysql = require('mysql')

async function execute(query) {
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
        con.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        })
    })

    let result = res.then((result)=>{return result}).catch((err)=>{return err});

    return result;
}

module.exports = {execute};