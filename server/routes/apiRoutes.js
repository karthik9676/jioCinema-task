const express = require("express");
const {Movies, MovieDetails} = require("../models/movies");
const {showDetails} = require("../models/shows");
const jwtAuth = require("../middleware/jwtAuth");

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("This is api router");
});

// To get all movies
router.get("/movies", jwtAuth, async(req, res)=>{
    try{
        const allMovies = await MovieDetails.find({});
        //console.log(allMovies)
        res.json({movies:allMovies})
    }
    catch(e){
        console.log(e.message);
        res.status(500).json({message:"Internal server error"})
    }
});

// To get a specific movie based on id
router.get("/movies/:id", jwtAuth, async(req, res)=>{
    try{
        //console.log(req.params)
        const {id} = req.params;
        const movieDetails = await MovieDetails.findOne({_id: id});
        if(!movieDetails){
            return res.status(404).json({message:"Movie not found"})
        }
        res.status(200).json({movieDetails: movieDetails})
    }
    catch(e){
        console.log(e.message);
    }
});

// filter movies
// router.get("/filtermovies", jwtAuth, async(req, res)=>{
//     //console.log(req.query)
//     const {search, genre, language} = req.query;
//     const query = {};
//     if(search){}
// })

// To get all shows
router.get("/shows", jwtAuth, async(req, res)=>{
    try{
        const allShows = await showDetails.find({});
        //console.log(allShows)
        res.json({shows:allShows})
    }
    catch(e){
        console.log(e.message);
        res.status(500).json({message:"Internal server error"});
    }
})

// To get a specific show based on their id
router.get("/shows/:id", jwtAuth, async(req, res)=>{
    try{
        //console.log(req.params)
        const {id} = req.params;
        const showResult = await showDetails.findOne({_id: id});
        if(!showResult){
            return res.status(404).json({message:"Movie not found"})
        }
        res.status(200).json({show: showResult})
    }
    catch(e){
        console.log(e.message);
    }
})

module.exports = router;