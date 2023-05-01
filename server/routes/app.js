const express = require('express');
var api = express.Router();
const path = require('path');
const fs = require('fs');

//REGISTER-FORM
api.post('/register-user', (req,res)=>{
    const user = {firstName:req.body.firstName, lastName:req.body.lastName, email:req.body.email,password:req.body.password};
   
    fs.readFile(__dirname + '/user.json',(err,data) =>{
        if(err){
            return;
        }

        const jsonData = JSON.parse(data);
        jsonData.push(user);

        const jsonString = JSON.stringify(jsonData,null,2);

        fs.writeFile(__dirname + '/user.json', jsonString, (err)=>{

            if(err){
                res.status(404).send({msg:"Error Registering user"});

            }
            else{
                res.status(200).send({msg:"Regsitered Successfully"});
            }

        })
    })
});


//VALIDATE -  USER ALREADY EXISTS
api.post('/validate-login', (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    console.log(email + " " + password);

    fs.readFile(__dirname + '/user.json',(err,data) =>{
        if(err){
            return;
        }
        else{
            const jsonData = JSON.parse(data);

            const exists = jsonData.some(obj => obj.email === email && obj.password === password);
            console.log(exists);

            if (exists) {
                res.status(200).send(true);
              } else {
                res.status(404).send(false);
              }
        }

    });
});

//ADD -QUIZ QUESTIONS
api.post('/add-question',(req,res) =>{
    console.log(req.body);

   fs.readFile(__dirname + '/data.json',(err,data) =>{
        if(err){
            return;
        }

        const jsonData = JSON.parse(data);
        jsonData.push(req.body);

        const jsonString = JSON.stringify(jsonData,null,2);

        fs.writeFile(__dirname + '/data.json', jsonString, (err)=>{

            if(err){
                res.status(404).send({msg:"Error Adding new Question"});

            }
            else{
                res.status(200).send({msg:"Question added Successfully"});
            }

        })
    })
});

//GET ALL - QUIZ QUESTIONS AND ANSWERS
api.get('/quiz', function(req,res){
    fs.readFile(__dirname + '/data.json', function(err,data){
        if(err){
            res.status(404).send("Error reading file");
        }
        else{
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        }
    })
});

//Export MiddleWare Function
module.exports = api;