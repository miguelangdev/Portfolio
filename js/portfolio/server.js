const path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
console.log("row.type");
db.each("SELECT DISTINCT type from Items", function(err, row) {
    console.log(row.type);
});

db.close();