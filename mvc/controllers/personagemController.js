const PersonagemDAO = require('../../DAO/personagemDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/person', (req, res) => {
        res.render('personagens/listpersons' , {})
    })

}