const Character = require("./../models/characters");
const { findAll, findById } = require("./../services/common");
const { paginationInfo } = require("../services/pagination");

const all = async (req, res) => {
  const data = await findAll(Character, req.query.page);
  const info = await paginationInfo({ req, Model: Character });
  res.json({ data, info });
};

const single = async (req, res) => {
  const data = await findById(Character, req.params.id);
  res.json(data);
};

module.exports = { all, single };
