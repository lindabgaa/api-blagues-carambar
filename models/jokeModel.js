const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Joke = sequelize.define("joke", {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true, // Prevents duplicate questions
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Joke;
