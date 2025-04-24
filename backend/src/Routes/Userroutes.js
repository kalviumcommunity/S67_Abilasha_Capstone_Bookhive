const express = require('express');
const User = require('../Model/User');
const userRouter = express.Router();


// Get all users
userRouter.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
});

// Get user by ID
userRouter.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
});


// Add new user
userRouter.post('/users', async (req, res) => {
    try {
      const { name, email } = req.body;
  
      const newUser = new User({
        name,
        email
      });
  
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(400).json({ message: "Error adding user", error: err.message });
    }
  });

  
  // UPDATE a user by ID
userRouter.put('/users/:id', async (req, res) => {
    try {
      const updates = req.body;
      const options = { new: true };
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        updates,
        options
      );
  
      if (!updatedUser)
        return res.status(404).json({ message: 'User not found' });
  
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: 'Error updating user', error: err.message });
    }
  });
  
module.exports = userRouter;
