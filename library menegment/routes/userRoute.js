const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();  
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const foundUser = await User.findOne({ userId: req.params.userId });

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(foundUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const { userId, userName, userEmail, userPassword, userPhone } = req.body;

    if (!userId || !userName || !userEmail || !userPassword) {
      return res.status(400).json({
        message: "UserId, UserName, UserEmail and UserPassword are required"
      });
    }

    const userExists = await User.findOne({ userId });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const newUser = new User({      
      userId,
      userName,
      userEmail,
      userPassword: hashedPassword,
      userPhone
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      message: "User added successfully",
      data: savedUser
    });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.patch('/:userId', async (req, res) => {
  try {
    const updates = req.body;

    if (updates.userPassword) {
      updates.userPassword = await bcrypt.hash(updates.userPassword, 10);
    }

    const updatedUser = await User.findOneAndUpdate(  
      { userId: req.params.userId },
      { $set: updates },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ 
      userId: req.params.userId
    });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
