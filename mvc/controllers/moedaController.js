const MoedaDAO = require('../../DAO/moedaDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/coin', (req, res) => {
        res.render('moedas/listmoedas' , {})
    })

}