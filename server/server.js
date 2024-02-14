const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {Movies, MovieDetails} = require("./models/movies");
const {showDetails} =require("./models/shows");

const app = express();

app.use(express.json());

app.use(cors());

const port = 4444 || process.env.PORT;

// Initializing mongoDB
mongoose.connect("mongodb+srv://karthikreddy7877:karthik7877@cluster0.j1oly1z.mongodb.net/jioCinema?retryWrites=true&w=majority")
.then( ()=>console.log("DB connected"))
.catch( (error)=>console.log(error))

//sending movies data to db 

// const addMovies = async () => {
//   try {
//     const movieDetail = new MovieDetails(
//         {
//             //movie-1
//             title: "Singham 2",
//             genre: "Action",
//             thumbnailUrl:
//               "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/main%20hoon%20surya%20singham%202-3x4-1677575831452.jpg",
//             rating: 9.2,
//             releseDate: "2013-07-05",
//             views: 12256787,
//             language: "Hindi,Telugu",
//             originalLanguage: "Telugu",
//             category: "Movies",
//             studio: "2D Entertainment",
//             director: "Hari",
//             bannerurl:
//               "https://static.wikia.nocookie.net/hindi-dubbing/images/3/30/Main-hoon-surya-singam-2.jpg/revision/latest?cb=20220413171233",
//             duration: "2 hr 39 min",
//             certificationType: "U/A 13+",
//             videoUrl: "https://youtu.be/QdzEiMK_pF0?si=UXSIYhdMvClWV5HG",
//             description:
//               "After having killed the notorious drug dealer Mayil Vaaganam, Duraisingam (Suriya) has gone undercover after meeting the Home Minister and is working as an NCC officer in a school in Thoothukudi. The only people who know about this operation are the Chief Minister and Home Minister apart from himself.",
//             cast: "Suriya, Anushka Shetty,Hansika Motwani",
//           },

//     );

//     const savedMovieDetail = await movieDetail.save();
//     // Create and save a Job document that uses the same _id as the JobDetail

//     const movie = new Movies(

//         {
//             _id: savedMovieDetail._id,
//             thumbnailUrl:
//               "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/main%20hoon%20surya%20singham%202-3x4-1677575831452.jpg",
//         }
//     );


//     await movie.save();
//     await mongoose.disconnect();
//   } catch (e) {
//     console.log(e);
//   }
// };
//    addMovies()

// sending shows data to db

// const addShows = async () => {
//   try {
//     const showDetail = new showDetails(
//       {
//         //Show-6
//         title: "The Resort",
//         genre: "Thriller",
//         thumbnailUrl:
//           "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/theresort_3x4-1685799460464.jpg?imformat=chrome",
//         language: "English",
//         category: "shows",
//         bannerurl:
//           "https://res.cloudinary.com/dlsfy08yr/image/upload/v1697440010/maxresdefault_nkjtyl.jpg",
//         certificationType: "U/A 13+",
//         videoUrl: "https://www.youtube.com/watch?v=0DmeT1GLQn8",
//         description:
//           "Exploring love and the weird things we do in the name of it, encased in an elaborate true-crime conspiracy.",
//         cast: "Cristin Milioti, William Jackson Harper, Luis Gerardo Méndez"
//       },
//     );

//     await showDetail.save();

//     await mongoose.disconnect();
//   } catch (e) {
//     console.log(e);
//   }
// };
    //  addShows();



app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
} )