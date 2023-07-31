import mysql from "promise-mysql";
import config from "../config";
/*
const connection =  mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
})
*/

const connection = mysql.createConnection({
  host: "localhost",
  database: "rest_api_nodejs_express",
  user: "root",
  password: "12345",
  port: "3306",
});

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
