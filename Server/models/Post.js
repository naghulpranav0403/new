const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    COMPANY: String,
    POSITION:String,
    LOCATION:String,
    EXPERIENCE:String,
    LOGO:String,
    ROLE:String,
    JOBTYPE:String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});
const Post = mongoose.model('PostJob',postSchema)
module.exports =Post
