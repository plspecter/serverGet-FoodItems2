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

var breakfeast = [
    {
        breakfeast: "Sunnyside up eggs"
    },
    {
        breakfeast: "Green eggs and ham omlette"
    },
    {
        breakfeast: "French Toast and strawberries"
    }
]

var lunchs = [
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
app.get("/breakfeast", function (req,res) {
 //this will render the object in the html 
    res.render("index", breakfeast)
});

