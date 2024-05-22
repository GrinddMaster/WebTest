const express = require('express');
const mongoose = require('mongoose');
const User = require('/home/lol/WebProject/Web-Proj/HTML/models/users.js');
const Plane = require('/home/lol/WebProject/Web-Proj/HTML/models/planes.js');
const app = express();

mongoose.connect('mongodb://localhost:27017/admin')
.then(()=>{
    console.log('Connected to DB');
    app.listen(5000,()=>{
    console.log('Server is listening at port 5000');});
}).catch((err)=>{
    console.log(err);
});

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
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    const UserData = 
    {
        Name: req.body.name,
        Age: req.body.age,
        Password: req.body.password
    };
    const user = new User(UserData);
    user.save().then((result) =>{
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    });
})

app.post('/registplane', (req, res) => {
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

