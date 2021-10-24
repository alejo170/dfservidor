const express = require('express');
const router = express.Router();
const { Usuarios } = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/test', (req, res) => {

    res.json({message: "backend desplegado"});
});
module.exports = router;