//Grab dependencies
var express = require("express")
var handlebars = require("express-handlebars")

//Create an isntance for express

var app = express();

//Set the port of our application..
//process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8066

//Set the handlebars as the default templating engine for html
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Data 

var breakfast = [
    {
        breakfast: "Sunnyside up eggs"
    },
    {
        breakfast: "Green eggs and ham omlette"
    },
    {
        breakfast: "French Toast and strawberries"
    }
]

var lunch = [
{
    lunch: "Beet and goat cheese salad"
},
{
    lunch: "Pizza and Fries"
},{
    lunch: "Chillie Cheese Burger"
}
]

var dinner = [
    {
        dinner: "Pasta Primavera"
    }, {
        dinner: "Steamed Hams"
    }, {
        dinner: "2 cent Ramen Special"
    }

];

//Routes that navigate the browser to each object 
// app.get("/breakfast", function (req,res) {
//     //this will render the object in the html 
//        res.render("index", breakfast[0]);
//    });
   //Routes that navigate the browser to each object 
// app.get("/breakfast", function (req,res) {
//     //this will render the object in the html 
//        res.render("index", breakfast[1]);
//    });

//Routes that navigate the browser to each object 
app.get("/breakfast", function (req,res) {
 //this will render the object in the html 
    res.render("breakfast", {
    foods: breakfast,
    eater: "Sweenie Todd"
    })
});

//now we get the lunches route
app.get("/lunch", function(req,res) {
    res.render("index", lunch[1])

});//Routes that navigate the browser to each object 



//now get the dinner route
app.get("/dinner", function (req, res) {
    res.render("dinner", {
    foods: dinner,
    eater: "Sweenie Todd"})
    // res.render("dinner", dinner[0])
});

//Start our server so that it can begin listening to client requests 
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("server is listening on: http://localhost:" + PORT);
});