const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "254425",
    database: "airbnb",
});

async function read(condition) {
    const { minPrice, maxPrice, sumOfPeople } = condition;
    const query = `SELECT * FROM airbnb 
                   WHERE price >= ${minPrice} AND price <= ${maxPrice} AND accommodates >= ${sumOfPeople}`;

    return await execute(query);
}

function execute(inputQuery) {
    return new Promise((resolve, reject) => {
        conn.query(inputQuery, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

module.exports = { read };
