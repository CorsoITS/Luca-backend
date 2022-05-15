const { Router } = require('express');
const { listOperator } = require('../model/operatore.dao');
const routerPersona = Router();
//const PersonaController = require ('../controllers/PersonaController');


routerPersona.get('/', async (req,res) => {
    const operatori = await listOperator();
    return res.json(operatori).send()
})

module.exports = {
    routerPersona
}