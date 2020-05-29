const mysql = require('mysql');

const connection = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "!nfinityWar2018",
	database: "bridgedb"
});

const getConnection = () =>{
	connection.connect();
	return connection;
};


module.exports = {getConnection};