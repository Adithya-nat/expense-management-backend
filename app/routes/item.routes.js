module.exports = app => {
  const items = require("../controllers/item.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/items", items.create);

  // Retrieve all items
  router.get("/items", items.findAll);

  //Retrieve all items in given date
  router.get("/itemsByDate", items.findByDate);

  //Retreive all items in given month
  router.get("/itemsByMonth", items.findByMonth);

  //Retrieve all items in given year
  router.get("/itemsByYear", items.findByYear);

  // Retrieve a single user with id
  router.get("/items/:id", items.findOne);

  // Update a User with id
  router.put("/items/:id", items.update);

  // Delete a User with id
  router.delete("/items/:id", items.delete);

  // Delete all items
  router.delete("/items", items.deleteAll);

  app.use('/api/', router);
};
