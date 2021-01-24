const { Schema, model } = require("mongoose");

const HouseSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  headMaster: {
    type: String,
    required: true,
  },
  ghost: {
    type: String,
    required: true,
  },
  ghostNickName: {
    type: String,
  },
  shield: {
    type: String,
    required: true,
  },
  hymn: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  animal: {
    type: String,
    required: true,
  },
  commonRoom: {
    type: String,
    required: true,
  },
  founder: {
    type: String,
    required: true,
  },
  history: {
    type: String,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
});

module.exports = model("House", HouseSchema); // crea una coleccion House que implementa
