var Connection = require('tedious').Connection
var Request = require('tedious').Request
var fs = require('fs');
var config = {  
    server: 'SERVER',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'USERNAME', //update me
            password: 'PASSWORD'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'HighRisk'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});  

  
var Request = require('tedious').Request  
var TYPES = require('tedious').TYPES;  

function executeStatement1() {  
    request = new Request("INSERT dbo.Users (UPN, JobTitle) VALUES (@UPN, @Title);", function(err) {  
     if (err) {  
        console.log(err);}  
    });  
    request.addParameter('UPN', TYPES.VarChar,'SQL Server Express 2014');  
    request.addParameter('Title', TYPES.VarChar , 'SQLEXPRESS2014');         
    connection.execSql(request);  
} 