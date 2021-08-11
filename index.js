 const express= require('express');// on a ramenner le package
 const mysql= require('mysql');
 const db=mysql.createConnection({
     host:"localhost",
     user:"root",
     password:"",
     database:"node"
 })

db.connect((err)=> {                         //on a connected connexion 
    if (err){console.log(err)}
    console.log("mysql connected")
})


 const app=express();    //initialiser le serveur
app.get("/", (req,res)=> {
    res.send("hi")
})
app.get('/createdb',(req,res)=>{     // creation bd
    let sql="create database node"
    db.query(sql,(err,result)=>{   //exécuter la requete
        if (err){console.log(err)}
        console.log(res)
        res.send("la base de donnee est bien creer")
    })
})

app.get("/createtble",(req,res)=>{
    let sql="create table test(id int primary key,text varchar(255))"
    db.query(sql,(err,result)=>{   //exécuter la requete
        if (err){console.log(err)}
        console.log(res)
        res.send("la table  est bien creer")
    })
})
 app.listen("3000" , ()=> {console.log("marche serveur 3000")}) //pour donner a notre serveur porte pour envoyer et recever des requetes http