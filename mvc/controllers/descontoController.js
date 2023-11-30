const DescontoDAO = require('../../DAO/descontoDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/desco', (req, res) => {
        res.render('descontos/listdescontos' , {})
    })

    app.get('/pagina/adddesconto', (req, res) => {
        res.render('descontos/adddescontos', {})
    })

    app.get('/pagina/caddescontos', async (req, res) => {
        const atrativo = new AtrativoDAO()

        const { 
            txtcoddesco: codigo, 
            txtnomedesco: nome, 
            txtvaldesco: valor, 
            txtvalidesco: validade, } = req.body;

        const idRetornado = await atrativo.cadastrar(codigo, nome, valor, validade)

        res.status(201).json({ msg: "ok", id: idRetornado })
    })

}