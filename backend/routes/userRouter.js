const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    try {
        let { email, password, passwordCheck, displayName } = req.body

        // validation 
        if (!email || !password || !passwordCheck) {
            return res.status(400).send('Not all fields have been entered.')
        }
        if (password.length < 5) {
            return res.status(400).send('Password needs to be at least 5 characters long.')
        }
        if (password !== passwordCheck) {
            return res.status(400).send('Retyped password does not match.')
        }
        // check if email already exists in the db
        const existingUser = await User.findOne({ email: email })
        if (existingUser) res.status(400).send('Email already in use.')

        // set display name to the email if user does not give one to us
        if (!displayName) displayName = email

        // hash password
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            email,
            password: passwordHash,
            displayName
        })

        const savedUser = await newUser.save()
        res.json(savedUser)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ msg: 'Not all fields have been entered' })
        }

        // does the email exist in the database?
        const existingUser = await User.findOne({ email: email })
        if (!existingUser) {
            return res.status(400).send('Email does not match an existing account.')
        }
        // check to see if password matches hashed password
        const isMatch = await bcrypt.compare(password, existingUser.password)
        
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password.' })
        }

        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET)
        res.json({
            token,
            user: {
                id: existingUser._id,
                displayName: existingUser.displayName,
                email: existingUser.email
            }
        })

    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }

})

module.exports = router;