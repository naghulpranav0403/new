const mongoose = require('mongoose')
const JobSchema = new mongoose.Schema({
    COMPANY: String,
    POSITION:String,
    LOCATION:String,
    EXPERIENCE:String,
    LOGO:String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});
const Job = mongoose.model('SavedJob',JobSchema)
module.exports = Job
