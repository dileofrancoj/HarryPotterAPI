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

module.exports = { all, single };
