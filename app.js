var express= require('express');
var bodyParser = require('body-parser');
var path=require('path');

var app = express();
let validator = require('validator');
let mongoose = require('mongoose');
let Person = require('./person');
let Database = require('./db');
Database._connect();
app.use(express.json());


app.post("/", (req, res) => {
  Person.create(req.body)
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
  app.get("/find", () => {
    Person.find()
    .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.error(err)
    })
    app.get("/findOne", (req,res) => {
      Person.findOne({ favoriteFoods: req.body.favoriteFoods }.then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
      }))
      app.get("/findById/:id", (req, res) => {
        Person.findById(req.params.id)
        .then(doc => {
          console.log(doc)
        })
        .catch(err => {
          console.error(err)
        })
        app.put("/updateById/:id", (req, res) => {
          Person.findById(req.params.id, (err, data) => {
            if (err) throw err;
            Person.update(
              data,
              { $push: { favoriteFoods: req.body.favoriteFoods } },
              // data.favoriteFoods.push(req.body.favoriteFoods),
              (err, data) => {
                if (err) throw err;
                res.send(`${req.body.favoriteFoods} is added to ${data.name}`);
              }
            );
          });
        });
        app.put("/findOneAndUpdate/:id", (req, res) => {
          Person.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { age: req.body.age } },
            { new: true })
            .then(doc => {
              console.log(doc)
            })
            .catch(err => {
              console.error(err)
            }) 
            app.delete("/findByIdAndRemove/:id", (req, res) => {
              Person.findByIdAndRemove(req.params.id)
              .then(doc => {
                console.log(doc)
              })
              .catch(err => {
                console.error(err)
              }) 
              app.delete("/remove/:name", (req, res) => {
                Person.remove({ name: req.params.name })
                .then(doc => {
                  console.log(doc)
                })
                .catch(err => {
                  console.error(err)
                }) 
                app.get("/search/:favoriteFoods", (req, res) => {
                  Person.find({ favoriteFoods: { $in: req.params.favoriteFoods } })
                    .sort("name")
                    .limit(2)
                    .select("-age")
                    .exec
                    .then(doc => {
                      console.log(doc)
                    })
                    .catch(err => {
                      console.error(err)
                    })
                    let port = process.env.PORT || 3000;
app.listen(port, () => console.log("server is running on port " + port));
              








































