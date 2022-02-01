/*var dbTables;
var dbTypeInfo;
window.onload = function(){
    if(!window.openDatabase){
        alert('Este navegador no soporta WebSQL abre la página con otro navegador');
        return;
    }

    var db = openDatabase('db.db', '1.0', 'Portfolio', 50*1024*1024);
    console.log(db);
    db.transaction(function (tx) {
        tx.executeSql('SELECT DISTINCT type from Items', [], function (tx, results) {
            for (let i = 0; i < results.rows.length; i++){
                dbTypeInfo.push(results.rows.item(i).word);
            }
        }, null);
    });
    db.transaction(function (tx) {
        tx.executeSql('SELECT type, img, tittle, description, idmodal, modaldescription, link from Items order by Type DESC, Priority', [], function (tx, results) {
            var len = results.rows.length;

        }, null);
    });
}*/

/*const path = require('path');
const {Database} = require('sqlite3').verbose();
const db = new Database(path.join(__dirname, "../../asset/db/", "db.db"));

async function createDb(){
    return
}

module.exports = {
    createDb
}*/