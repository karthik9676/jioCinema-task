const mongoose = require("mongoose");

const { Schema } = mongoose;

const movieSchema = new mongoose.Schema({
    thumbnailUrl: String
});

const Movies = mongoose.model('Movies', movieSchema);

const movieDetailsSchema = new mongoose.Schema({
    title : String,
    genre : String,
    thumbnailUrl : String,
    rating : Number,
    releaseDate : String,
    views : String,
    language : String,
    originalLanguage : String,
    category : String,
    studio : String,
    director : String,
    bannerurl : String,
    duration : String,
    certificationType : String,
    videoUrl : String,
    description : String,
    cast : String,
});

const MovieDetails = mongoose.model('MovieDetails', movieDetailsSchema);

module.exports = {Movies, MovieDetails}; 