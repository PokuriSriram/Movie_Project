const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
dotenv.config();
const app = express();
app.use(cors());

app.post("/api/register", async (req, res) => {
    const { fullname, email, phone, password } = req.body;
    const newuserdata = new User(
        {
            fullname,
            email,
            phone,
            password: hashedpassword
        })
    await newuserdata.save();
})