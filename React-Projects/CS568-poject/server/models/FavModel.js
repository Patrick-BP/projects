const mongoose = require ('mongoose')

const {Schema} = mongoose

const FavoriteMoviesSchema = new Schema({
    userId:String,
    movieId:{type: mongoose.Schema.Types.ObjectId, ref: "Movies"},
},{timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('FavoriteMovies',  FavoriteMoviesSchema)