const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({
        statusBody: 200,
        Message: 'Deu bom'
    })
})

module.exports = routes;