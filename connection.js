var knex = require('knex')({
    client: 'mssql',
    connection: {
      server: '192.168.4.62',
      user: 'ADMIN',
      password: 'Destruction@1010',
      database: 'USUARIOS',
      options: {
        encrypt: false,
        port: 1433,
        connectTimeout: 60000,
        requestTimeout: 70000, 
      },
    }
  });
  

  
module.exports = {
    knex
 };