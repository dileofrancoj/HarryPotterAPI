const { Schema, model } = require("mongoose");

const CharacterSchema = Schema({
 
    // FALTA COMPLETAR!
    name: {
        type: String,
        required: true,
      }
});

module.exports = model("Character", CharacterSchema);
