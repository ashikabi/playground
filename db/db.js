const mysql = require('mysql');

const pool = mysql.createPool({
	//connectionLimit : 10,
	host: "127.0.0.1",
	user: "root",
	password: "qwerty123",
	database: "bridgedb"
});

const getConnection = () =>{
	console.log("getConnection...");
	return new Promise((resolve, reject) => {
		pool.getConnection(function(err, connection) {
			if (err) 
				reject(err); 
			resolve(connection);
		});
	});
};


module.exports = {getConnection};