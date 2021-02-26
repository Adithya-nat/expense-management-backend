module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("item", {
    itemName: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    totalPrice: {
      type: Sequelize.BIGINT
    },
    quantity: {
      type: Sequelize.BIGINT
    },
    day: {
      type: Sequelize.BIGINT
    },
    month: {
      type: Sequelize.BIGINT
    },
    year: {
      type: Sequelize.BIGINT
    }
  });

  return Item;
};