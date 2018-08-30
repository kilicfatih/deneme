var mongoose = require('mongoose');
var express = require('express');
var app = express();
var messageSchema= require('./messageSchema');
var bodyParser= require('body-parser');
var cors= require('cors');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://fatih:B13471357b.@ds129541.mlab.com:29541/sogut', (err)=>{
    if (!err){
        console.log('connected to Db')
    } else console.log('db connection some problem')
})

app.post('/saveMyForm', ((request, response)=>{
    var message= new messageSchema(request.body);
    message.save((error, result)=>{
        if(error){
            console.log(error)
            return response.status(500).send({message:'mesage cannot saved'});
        } else {
            return response.status(201).send(result);
        }
    })


})
),

app.listen(8080)