const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser=require('../middleware/fetchuser')
const jwt = require('jsonwebtoken');
let JWT_SECRET = "MongoLearningCourse$GoodCourse";

//Route 1- Create a user

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid Password').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email exists" });
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        const data = {
            user: {
                id: user.id,
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})
//Route 2- Login user

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ error: "Please enter correct credentials" });
        }

        if (req.body.password !== user.password) {
            return res.status(400).json({ error: "Please enter correct credentials" });
        }
        const data = {
            user: {
                id: user.id,
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route 3- Get the user

try {
    router.get('/getuser', fetchuser, async (req, res) => {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.send(user);
    })
} catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
}

module.exports = router;