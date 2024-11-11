const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const app = express();
app.use(express.json())
app.use(cors());
const JobModel = require('./models/Save')
const PostModel = require('./models/Post')
const url =  'mongodb+srv://Naghulpranav2005:Naghulpranav2005@cluster0.stubg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url)

.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const userSchema = new mongoose.Schema({
 username: { type: String, required: true, unique: true },
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);


const verifyToken = (req, res, next) => {
 const token = req.headers['authorization'];
 if (!token) return res.status(403).json({ message: 'No token provided' });

 jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
   if (err) return res.status(401).json({ message: 'Failed to authenticate token' });
   req.userId = decoded.userId;
   next();
 });
};


app.post('/api/register', async (req, res) => {
 try {
   const { username, email, password } = req.body;
   if (!username || !email || !password) {
     return res.status(400).json({ message: 'All fields are required' });
   }
   const existingUser = await User.findOne({ $or: [{ email }, { username }] });
   if (existingUser) {
     if (existingUser.email === email) {
       return res.status(400).json({ message: 'Email already exists' });
     }
     if (existingUser.username === username) {
       return res.status(400).json({ message: 'Username already exists' });
     }
   }
   const hashedPassword = await bcrypt.hash(password, 10);
   const user = new User({ username, email, password: hashedPassword });
   await user.save();
   res.status(201).json({ message: 'User registered successfully' });
 } catch (error) {
   console.error('Error registering user:', error);
   res.status(500).json({ message: 'Error registering user' });
 }
});


app.post('/api/login', async (req, res) => {
 try {
   const { email, password } = req.body;

   
   const user = await User.findOne({ email });
   if (!user) {
     return res.status(400).json({ message: 'User not found' }); 
   }

   const isMatch = await bcrypt.compare(password, user.password);
   if (!isMatch) {
     return res.status(400).json({ message: 'Invalid credentials' }); 
   }

   
   const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
   res.json({ token, userId: user._id });
 } catch (error) {
   console.error('Error logging in:', error);
   res.status(500).json({ message: 'Error logging in' });
 }
});

app.post('/save-job',async (req,res)=>{
   const jobData = req.body;
   const newJob = new JobModel(jobData);
   try{    
       await newJob.save();
       res.send('Job Saved Successfully');
   }
   catch(error){
       res.send('Failed to save job');
   }
})
app.post('/post-jobs',async (req,res)=>{
   const formData = req.body;
   const postJob = new PostModel(formData);
   try{
       await postJob.save();
       res.send('Job Saved Successfully');
   }
   catch(error){
       res.send('Failed to save job');
   }
})
app.put('/update', async (req, res) => {
 const { id, newCompany } = req.body;

 try {
   const updatedJob = await JobModel.findByIdAndUpdate(id, { COMPANY: newCompany } );

   if (!updatedJob) {
     return res.status(404).send('Job not found');
   }

   res.send('Job updated successfully');
 } catch (error) {
   res.status(500).send('Failed to update job');
 }
})
app.delete('/delete/:id',async(req,res)=>{
   const id = req.params.id
   try{    
       const deletedFood = await JobModel.findByIdAndDelete(id);
       deletedFood ? res.send("DeletedSucessfully"): res.send("Deleted failed")
   }
   catch(error){
       res.send('Failed to delete job')
   }
})
app.get('/saved-jobs',async (req,res)=>{
   try{
       const savedJobs = await JobModel.find();
       res.send(savedJobs);
   }
   catch (error){
       res.send('Failed to retrieve saved jobs')
   }
})
app.get('/post-jobs',async (req,res)=>{
   try{
       const postJobs = await PostModel.find();
       res.send(postJobs);
   }
   catch (error){
       res.send('Failed to retrieve saved jobs')
   }
})
app.listen(2005,()=>{
 console.log('Server running on https://server-jz3w.onrender.com')
})