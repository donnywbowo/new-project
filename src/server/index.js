const express = require('express');
const mongoose = require('mongoose');

const dbConnect = require('../connection/dbConnect');
const router = require('../routers');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
router(app);
dbConnect(mongoose);


app.listen(3000, () => console.log('server running'));
