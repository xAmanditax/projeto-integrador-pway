const CupomDAO = require('../../DAO/cupomDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/cup', (req, res) => {
        res.render('cupons/listcupons' , {})
    })

    app.get('/pagina/addcupom', (req, res) => {
        res.render('cupons/addcupons' , {})
    })

}