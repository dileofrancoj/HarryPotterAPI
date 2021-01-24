const House = require("./../models/houses");
const { findAll, findById } = require("./../services/common");
const { paginationInfo } = require("../services/pagination");
const all = async (req, res) => {
  const data = await findAll(House, req.query.page);
  const info = await paginationInfo({ req, Model: House });
  res.json({ data, info });
};

const single = async (req, res) => {
  const data = await findById(House, req.params.id);
  res.json(data);
};
const create = async (req, res) => {
  try {
    const house = new House(req.body);
    const { _id } = await house.save();
    res.json({ message: "Casa dada de alta", _id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error" });
  }
};

module.exports = { all, single, create };
