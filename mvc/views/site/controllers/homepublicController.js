const DescontoDAO = require('../../DAO/descontoDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('site/home' , {})
    })

}