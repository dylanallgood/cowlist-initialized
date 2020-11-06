const { CowList } = require('../db/schema');

const create = (name, description) => {
  return CowList.create({
    name: name,
    description: description,
  });
};

const getCows = () => {
  return CowList.findAll();
};

module.exports = {
  create,
  getCows,
};
