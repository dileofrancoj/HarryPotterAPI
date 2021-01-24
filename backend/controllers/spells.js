const Spells = require("./../models/spells");
const { findAll, findById } = require("./../services/common");
const { paginationInfo } = require("../services/pagination");
const all = async (req, res) => {
  const data = await findAll(Spells, req.query.page);
  const info = await paginationInfo({ req, Model: Spells });
  res.json({ data, info });
};

const single = async (req, res) => {
  const data = await findById(Spells, req.params.id);
  res.json(data);
};

module.exports = { all, single, create };
