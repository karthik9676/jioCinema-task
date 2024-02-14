const mongoose = require("mongoose");

const { Schema } = mongoose;

const showDetailsSchema = new mongoose.Schema({
    title : String,
    genre : String,
    thumbnailUrl : String,
    language : String,
    category : String,
    bannerurl : String,
    certificationType : String,
    videoUrl : String,
    description : String,
    cast : String,
});

const showDetails = mongoose.model('showDetails', showDetailsSchema);

module.exports = {showDetails}; 