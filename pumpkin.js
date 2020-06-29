const db = require('./dbConfig');
const Sequelize = require('sequelize');

//YOUR CODE GOES HERE
const Pumpkin = db.define('pumpkin', {
  name: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.ENUM,
    values: ['small', 'medium', 'large'],
  },
  evil: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  carved: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  candle: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

Pumpkin.prototype.lightcandle = function () {
  return new Promise((res, rej) => {
    res();
  });
};
//--------------------
module.exports = Pumpkin;
