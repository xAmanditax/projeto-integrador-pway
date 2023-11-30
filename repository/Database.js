const mysql = require('mysql2')

class DatabaseMySql{

    #connection

    constructor(){
        this.#connection = mysql.createPool({
            database:'bdgp',
            user:'root',
            password:'',
            host:'localhost'
        }).promise()
    }


    async selectAtrativos(){
        const query = await this.#connection.query('select * from atrativos')
        return query[0]
    }
    
    async selectAtrativosId(){
        const query = await this.#connection.query('select * from atrativos where id_atrativos' +id)
        return query[0]
    }

    async insertAtrativos(param){
        const sql = `insert into atrativos (nome_atrativo, lat_atrativo, long_atrativo, desc_atrativo, image_atrativo)
        values ('${param.nome}','${param.latitude}','${param.longitude}','${param.descricao}','${param.imagem}')`

        const query = await this.#connection.execute(sql)
        return query[0]
    }


    async deleteAtrativos(id){
        const sql = 'delete from atrativos where id_atrativo = ' +id
0
        const res = await this.#connection.execute(sql)
        return res[0]
    }

    async updateAtrativos(nome, lat, long, desc, image, id){
        const sql = `update atrativos 
          set nome_atrativo = "${nome}",
              lat_atrativo = "${lat}",
              long_atrativo = "${long}",
              desc_atrativo = "${desc}",
              image_atrativo = "${image}"
              where id_atrativo = ${id}
        `
  
        const r = await this.#connection.execute(sql)
        return r[0]
      }
    
      async selectMissoes(){
        const query = await this.#connection.query('select * from missoes')
        return query[0]
    }

    async selectMissoesId(){
        const query = await this.#connection.query('select * from missoes where id_missoes' +id)
        return query[0]
    }

    async insertMissoes(){
        const sql = `insert into atrativos (nome_missao, desc_missao, recompensa_missao)
        values ('${param.nome}','${param.descricao}','${param.recompensa})`

        const query = await this.#connection.execute(sql)
        return query[0]
    }

    async deleteMissoes(id){
        const sql = 'delete from missoes where id_missoes = ' +id

        const res = await this.#connection.execute(sql)
        console.log(res)
        return res[0]
    }

    async updateMissoes(nome, desc, recompensa, id){
        const sql = `update missoes 
          set nome_missao = "${nome}",
              desc_missao = "${desc}",
              recompensa_missao= "${recompensa}",
              where id_missoes = ${id}
        `
  
        const r = await this.#connection.execute(sql)
        return r[0]
      }

}

module.exports = DatabaseMySql