const express = require('express')
const mongoose = require('mongoose');
const db = require('./db.js');

const User = require('./model/User.js');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


app.get('/user/home', (req, res) => {
    User.find({}, function (err, data) {
        if (err) {
            throw err;
        }
        res.json(data);
    })



});


app.listen(8080, () => console.log(`Example app listening on port 8080!`))