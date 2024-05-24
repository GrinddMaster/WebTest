const express = require('express');
const mongoose = require('mongoose');
const User = require('/home/lol/WebProject/Web-Proj/HTML/models/users.js');
const Plane = require('/home/lol/WebProject/Web-Proj/HTML/models/planes.js');
const path = require('path');
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/admin')
.then(()=>{
    console.log('Connected to DB');
    app.listen(5000,()=>{
    console.log('Server is listening at port 5000');});
}).catch((err)=>{
    console.log(err);
});

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');




app.get('/',(req,res)=>{
    res.status(200);
    res.render('login');
})

app.get('/register',(req,res)=>{
    res.status(200);
    res.render('register');
})
app.get('/registplane',(req,res)=>{
    res.status(200);
    res.render('registplane');
})
app.get('/Welcome',(req,res)=>{
    res.status(200);
    res.render('WelcomLogin');
})
app.get('/LookUp',(req,res)=>{
    res.status(200);
    res.render('PlaneLookup');
})
app.get('/LookUp/:id',(req,res)=>{
    const id = req.params.id;
    res.status(200);
    Plane.findById(id).then((result)=>{
        res.render('PlaneLookup', {Information: result.Country});
    })
})


app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => { //Adds a new user to the DB
    const UserData = 
    {
        Name: req.body.name,
        Age: req.body.age,
        Password: req.body.password
    };
    const user = new User(UserData);
    user.save().then(() =>{
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    });
})

app.post('/registplane', (req, res) => { // Adds a new plane to the DB
    const PlaneData = 
    {
        Name: req.body.aircraftName,
        Country: req.body.countryName,
        Information: req.body.information
    };
    const plane = new Plane(PlaneData);
    plane.save().then(() =>{
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    });
})
app.get('/:id',(req,res)=>{
    const id = req.params.id;
    if (id == 1)
        {
            res.status(200);
            res.render('First');
        }
    if (id == 2)
        {
            res.status(200);
            res.render('Mig15');
        }
    if (id == 3)
        {
            res.status(200);
            res.render('Me262');
        }    
})