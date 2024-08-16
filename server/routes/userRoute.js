const express = require('express');
const router = express.Router();
const User = require('../models/user.model')
const multer = require('multer');
const bcrypt = require('bcryptjs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Directory to save uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); 
    },
  });

  const upload = multer({ storage: storage });

// POST Method for Sign Up
router.post('/signup', upload.single('profilePicture') ,async (req, res) => {

    try {
        const data = req.body;
        const profilePicture = req.file ? req.file.path : '';

        const userExist = await User.findOne({ email: data.email })

        if (userExist) {
            return res.status(400).json({ message: "User already exist with this email." })
        }
        const newUser = new User({ ...data, profilePicture })
        const response = await newUser.save()

            if(newUser){
                return res.status(201).json({ message: "User created successfully.", user: response })
            }
            else{
                return res.status(400).json({ message: "Failed to create user." })
            }
    }
    catch (err) {
        console.log(err);
    }
})

// POST Method for Log In
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and Password Required' });
      }
  
      const user = await User.findOne({ email });
      if (user) {
        return res.status(200).json({ message: 'Login Successful' });
      } else {
        return res.status(404).json({ message: 'User Not Found' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server Error' });
    }
  });
  
  

module.exports = router