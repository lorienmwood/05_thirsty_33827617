// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {
  shopName: "Drinks for all",
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

router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

router.get("/search_result", function (req, res) {
  // TODO: search in the database
  //   res.send(req.query);
  res.send(
    "You searched for " + req.query.search_text + " in " + req.query.category
  );
});

router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

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

// Export the router object so index.js can access it
module.exports = router;
