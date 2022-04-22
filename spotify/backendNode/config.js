const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'bafhkyezr13mtepp5fkm-mysql.services.clever-cloud.com',
    user: 'uhwtovctqitxzrjj',
    password: 'MTZ978OJooNNuM7yTE8V',
    database: 'bafhkyezr13mtepp5fkm'
  });
  
module.exports = connection;