const mysql = require('mysql')

function connect()
{
    const connection = mysql.createConnection({
        host:'192.168.2.4',
        user:'root',
        password:'root',
        database:'myapp_db1',
        port:9090
    })
   connection.connect()
   return connection
}

module.exports = {
    connect:connect
}