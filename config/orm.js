var connection = require('./connection.js');

var orm = {
    all: function(tableInput, db){
        connection.query('SELECT * FROM '+tableInput+';', function(err,result){
            if(err) throw err;
            db(result)
        })       
    },
    update: function(tableInput, condition, cb){
        connection.query('UPDATE '+tableInput+'set devoured=true WHERE id='+condition+';', function(err, result){
            if(err)throw err;
            cb(result)

        })
    },

    create: function(tableInput, val, cb){
        connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('+val+');", function(err,result){
            if(err)throw err;
            cb(result);
        })
    }
}

module.exports = orm;
