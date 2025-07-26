const mongoose = require("mongoose");
const schema = mongoose.Schema;

const artticle = new schema({
    title:String,
    price:String
});

const artschema = mongoose.model("article",artticle);

module.exports = artschema;