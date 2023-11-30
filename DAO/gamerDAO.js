const Gamer = require('../mvc/models/gamerModel')
const Db = require('../repository/Database')

class GamerDAO{
    #db

    constructor(){
        this.#db = new Db()
    }

    async consultarGamers(){
        let list_gamers= []

        const query = await this.#db.selectGamers()

        for(let i = 0; i < query.length; i++){
            const gamer = new Gamer()

            gamer.id = query[i].id_atrativo
            gamer.nome = query[i].nome_gamer
            gamer.senha = query[i].senha_gamer
            gamer.email = query[i].email_gamer
            gamer.dataNascimento = query[i].dtnasc_gamer

            list_atrativos.push(atrativo.toJson())

        }
        return list_gamers
}

async consultarUm(id){
    const query = await this.#db.selectGamers(id)
    const gamer = new Gamer();

    if(query){
        gamer.id = query[0].id_gamer
        gamer.nome = query[0].nome_gamer
        gamer.senha = query[0].senha_gamer
        gamer.email = query[0].email_gamer
        gamer.dataNascimento = query[0].dtnasc_gamer
    }

    return gamer.toJson()
}

async cadastrar(nome, senha, email, dataNascimento){
    const gamer = new Gamer()
    
    gamer.nome = nome
    gamer.senha = senha
    gamer.email = email
    gamer.dataNascimento = dataNascimento
   
    const sql = await this.#db.insertGamers(gamer.toJson())

    return sql.insertId;
}

async apagar(id){
    const linhasAfetadas = await this.#db.deleteGamers(id)
    return linhasAfetadas.affectedRows
}

async atualizar(nome, lat, long, descricao, imagem, id){
    const gamer = new Gamer()
    gamer.nome = nome
    gamer.senha = senha
    gamer.email = email
    gamer.dataNascimento = dataNascimento 

    const r = await this.#db.updateGamers(
        gamer.nome,
        gamer.senha,
        gamer.email,
        gamer.dataNascimento
    )
    return r.affectedRows
}
}

module.exports = GamerDAO
