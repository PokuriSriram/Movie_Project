const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bcrypt=require('bcryptjs')
const dotenv=require('dotenv')
dotenv.config();
const app=express();
app.use(cors());