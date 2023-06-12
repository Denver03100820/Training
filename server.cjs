
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'appointment',
});

connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL:', error);
      return;
    }
    console.log('Connected to MySQL database');
});

connection.query('SELECT * FROM tblappointment where app_studno ="K1140324" ', (error, results) => {
    if (error) {
        console.error('Error executing MySQL query:', error);
        return;
    }
    console.log('Query results:', results);
});

connection.end((error) => {
    if (error) {
      console.error('Error closing MySQL connection:', error);
      return;
    }
    console.log('MySQL connection closed');
});