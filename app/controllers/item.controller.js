const db = require("../models");
const Item = db.items;
const Op = db.Sequelize.Op;

// Create and Save a new Item
exports.create = (req, res) => {
  console.log(req.body);
  // Validate request
  if (!req.body.itemname || !req.body.type|| !req.body.totalprice|| !req.body.quantity || !req.body.day || !req.body.month || !req.body.year ) {
    res.status(400).send({
      message: "Item name, type, price, day, month, year of purchase and quantity are required to create item."
    });
    return;
  }

  // Create a Item
  const item = {
    itemName: req.body.itemname,
    type: req.body.type,
    totalPrice: req.body.totalprice,
    quantity: req.body.quantity,
    day: req.body.day,
    month: req.body.month,
    year: req.body.year
  };

  // Save Item in the database
  Item.create(item)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the item."
      });
    });
};

// Retrieve all Items from the database.
exports.findAll = (req, res) => {
  const itemName = req.query.itemName;

  const condition = itemName ? { itemName: { [Op.like]: `%${itemName}%` } }: null;

  Item.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Items."
      });
    }); 
};

//Retrieve items based on date.
exports.findByDate = (req, res) => {
  const condition = {
    day: req.query.day,
    month: req.query.month,
    year: req.query.year
  }

  Item.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Items."
      });
    });
}

//Retrieve items based on month.
exports.findByMonth = (req, res) => {
  const condition = {
    month: req.query.month,
    year: req.query.year
  }

  Item.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Items."
      });
    });
}
  
// Find a single Item with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(req.query);
  Item.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving item with id=" + id
      });
    });
};

// Update a Item by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Item.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Item was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating user with id=" + id
      });
    });
};

// Delete a Item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Item.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Item was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Item with id=${id}. Maybe Item was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Item with id=" + id
      });
    });

};

// Delete all Items from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Items."
      });
    });
};
