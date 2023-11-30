const Missao = require('../mvc/models/missaoModel')
const Db = require('../repository/Database')

class MissaoDAO{

    #db

    constructor(db){
        this.#db = new Db()
    }

    async consultarTodos(){
        let list_missoes = []

        const query = await this.#db.selectMissoes()

        for(let i = 0; i < query.length; i++){
            const missao = new Missao()

            missao.id = query[i].id_missao
            missao.nome = query[i].nome_missao
            missao.descricao = query[i].desc_missao
            missao.recompensa = query[i].recompensa_missao

            list_missoes.push(missao.toJson())
        }

        return list_missoes
    }

    async consultarUm(id){
        const query = await this.#db.selectMissoes(id)
        const missao = new Missao();

        if(query){
            missao.id = query[0].id_missao
            missao.nome = query[0].nome_missao
            missao.descricao = query[0].desc_missao
            missao.recompensa = query[0].recompensa_missao
        }

        return atrativo.toJson()
    }

    async cadastrar(nome, descricao, recompensa){
        const missao = new Missao(nome, descricao, recompensa)

        missao.descricao = descricao
        missao.recompensa = recompensa

        const sql = await this.#db.insertMissoes(missao.toJson())

        return sql.insertId
    }

    async apagar(id){
        const linhasAfetadas= await this.#db.deleteMissoes(id)
        return linhasAfetadas.affectedRows
    }

    async atualizar(id, nome, descricao, recompensa){
        const missao = new Missao(nome)
        missao.descricao = descricao
        missao.recompensa = recompensa

        const r = await this.#db.updateMissoes(
            missao.nome,
            missao.descricao,
            missao.recompensa,
            missao.id
        )

        return r.affectedRows
    }

}

module.exports = MissaoDAO
