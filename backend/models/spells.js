const { Schema, model } = require("mongoose");

const SpellsSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  effect: {
    type: String,
    required: true,
  },
  counterSpell: {
    type: String,
    required: true,
  },
});

module.exports = model("Spells", SpellsSchema);