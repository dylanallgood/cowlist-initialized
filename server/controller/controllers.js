const { create, getCows } = require('../model/models');

const createCow = (req, res) => {
  let name = req.body.name;
  let description = req.body.description;

  create(name, description)
    .then(() => res.sendStatus(201))
    .catch(() => res.status(400).send('cow already exists or invalid request'));
};

const getCow = (req, res) => {
  getCows()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(() => {
      res.status(400).send('empty cowlist or invalid request');
    });
};

module.exports = {
  createCow,
  getCow,
};
