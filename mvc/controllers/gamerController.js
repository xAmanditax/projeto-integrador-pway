const GamerDAO = require('../../DAO/gamerDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/gam', async (req, res) => {
        const gamers = new GamerDAO()
        let list_gamers = []
        list_gamers =  await gamers.consultarGamers()
        res.render('gamers/listgamers', { lista_gamers: list_gamers })
    })

    app.get('/pagina/addgamer', (req, res) => {
        res.render('gamers/addgamers', {})
    })


    app.post('/pagina/cadgamers', async (req, res) => {
        const atrativo = new AtrativoDAO()

        const { 
            txtnomegam: nome, 
            txtsenhagam: senha, 
            txtemailgam: email, 
            txtdtnascgam: dataNascimento, 
            txtpersogam: personagem } = req.body;

        const idRetornado = await atrativo.cadastrar(nome, senha, email, dataNascimento, personagem)

        res.status(201).json({ msg: "ok", id: idRetornado })
    })


}