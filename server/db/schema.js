const { Sequelize } = require('sequelize');
let { mySqlKey } = require('../db/keys');

// connect to database
const db = new Sequelize('cowlist', 'root', mySqlKey, {
  host: 'localhost',
  dialect: 'mysql',
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// cowlist table
const CowList = db.define('cowlist', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
});

CowList.sync({ alter: true });

module.exports = {
  CowList,
};
