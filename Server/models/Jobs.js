const mongoose = require('mongoose')
const jobsSchema = new mongoose.Schema({
    COMPANY: String,
    POSITION:String,
    LOCATION:String,
    EXPERIENCE:String,
    LOGO:String,
    ROLE:String,
    JOBTYPE:String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});
const Jobs = mongoose.model('Joba',jobsSchema)
module.exports =Jobs
