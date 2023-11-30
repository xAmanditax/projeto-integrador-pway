const MissaoDAO = require('../../DAO/missaoDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/missoes', (req, res) => {
        const missaoDAO = new MissaoDAO()
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.json(await/ missaoDAO.consultarTodos())
    })

    app.get('/missao', (req, res) => {
        res.render('missoes/listmissoes', {})
    })

    app.get('/pagina/addmissao', (req, res) => {
        res.render('/missoes/addmissoes', {})
    })

}