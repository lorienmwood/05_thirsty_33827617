// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {
  shopName: "The Sip City ",
  productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
  shopInfo: [
    {
      locations: "New Cross Gate",
      manager: "Anne Hathaway",
      address: "123 Random Street ",
    },
    {
      locations: "Elephant and Castle",
      manager: "Ben Stiller",
      address: "64 Zoo Lane",
    },
    {
      locations: "Barbican",
      manager: "Gary Oldman",
      address: "98 Park Lane",
    },
    {
      locations: "Bank",
      manager: "Maggie Smith",
      address: "5 Lara Croft Avenue",
    },
  ],
};

// Handle the main routes

router.get("/", function (req, res) {
  res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});

// Search Route - Find items in shop
router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

// Search Results Route - Shows database results
router.get("/search_result", function (req, res) {
  res.send(
    "You searched for " + req.query.search_text + " in " + req.query.category
  );
});

// Register Route - To register customers
router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

// Reistered Route - Shows customers first name, last name and email
router.post("/registered", (req, res) => {
  //   res.send(req.body);
  res.send(
    " Hello " +
      req.body.first +
      " " +
      req.body.last +
      " you are now registered!" +
      " We will send an email to you at " +
      req.body.email
  );
});

// Survey Route - For customers to take survey
router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});

// Reistered Route - Shows customers first name, last name and email
router.post("/surveyResponse", (req, res) => {
  res.send(
    " Hello " +
      req.body.first +
      " " +
      req.body.last +
      " thanks for completing the survey" +
      " We will send an email to you at " +
      req.body.email +
      " with your responses. " +
      "<br>" +
      " Your age is " +
      req.body.age +
      " years old. " +
      "<br>" +
      " We asked if you are a student, you said " +
      req.body.student +
      ".<br>" +
      "You consume " +
      req.body.category
  );
});

// Export the router object so index.js can access it
module.exports = router;
