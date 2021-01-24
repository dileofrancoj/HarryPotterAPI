const { Schema, model } = require("mongoose");
// enum
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
  unforgivable: {
    type: Boolean,
    required: true,
  },
});

module.exports = model("Spells", SpellsSchema); // crea una coleccion House que implementa
