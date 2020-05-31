const express = require("express");

const router = express.Router();

router.get('/atendimento', (req, res) => {
    res.send({
        statusCode: 200,
        message: 'Sua primeira requisição',
    })
})

module.exports = (app) => app.use("/", router);