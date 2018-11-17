var express = require('express');
var burgers_controller = express.Router();
var burger = require('../models/burger.js');

burgers_controller.get('/', function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index',{burger_data});
    })
})

burgers_controller.put('/burgers/update', function(req,res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

burgers_controller.post('/burgers/create', function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    })
})

module.exports = burgers_controller;