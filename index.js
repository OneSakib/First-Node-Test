const express = require('express');
const path = require('path');
const app = express();
const reqFilter = require('./middleware')
const routes = require('express').Router();


app.set('view engine', 'ejs')


const public_path = path.join(__dirname, 'public')
app.use(express.static(public_path))




routes.use(reqFilter);

routes.get('', (req, res) => {
    let my_data = {
        "name": "Sakib Malik",
        "village": "AGHYANA",
        "skills": ["Python", "Java", "React", "React Native", "Vue js", "React JS"]
    }
    res.render('profile', { my_data });
})

routes.get('/login', (req, res) => {
    res.render('login')
})


routes.get('/about', (req, res) => {
    res.sendFile(path.join(public_path, 'about.html'))
    // res.send("<h1>Hello World !!</h1>")
})

routes.get('*', (req, res) => {
    res.sendFile(path.join(public_path, 'error.html'))
})


routes.get('/home', (req, res) => {
    res.send("<h1>Welcome to Home</h1>")
})


routes.get('/about', (req, res) => {
    res.send("<h1>Welcome to About Page </h1>")

})


routes.get('/data', (req, res) => {
    res.send({ "FirstName": "Sakib", "LastName": "Malik" })
})

app.use('', routes)
app.listen(5000);
