
const express = require('express');

const User = require("../model/user")
const userRoute = express.Router();
userRoute.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


userRoute.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
userRoute.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const users = await User.findByIdAndDelete({ _id: id });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
userRoute.put('/users/:id', async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.age != null) {
    res.user.age = req.body.age;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = {userRoute};
