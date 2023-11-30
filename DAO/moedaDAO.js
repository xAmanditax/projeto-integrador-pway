const Moeda = require('../mvc/models/moedaModel');
const Db = require('../repository/Database')

class MoedaDAO{

    #db

    constructor(){
        this.#db = new Db()
    }

    async consultarTodos(){
        let list_moedas = []
            const query = await this.#db.selectMoedas()

            for(let i = 0; i < query.length; i++){
                const moeda = new Moeda()

                moeda.id = query[i].id_coin
                moeda.nome = query[i].nome_coin
                moeda.valor = query[i].value_coin
                moeda.imagem = query[i].image_coin

                list_moedas.push(moeda.toJson())
            }
            return list_moedas
        }

        async consultarUm(id){

            const query = await this.#db.selectMoedas(id)
            const moeda = new Moeda()

        }
}