const connection = require("../database/connection");
const crypto = require('crypto');

module.exports = {
    async create(req,res){
        const {nome,numero,email} = req.body;
        const id = crypto.randomBytes(4).toString('hex')

        await connection('users').insert({
            id,
            nome,
            numero,
            email,
        })
        res.json({id})
    },

    async receive(req,res){
        const Lista = await connection('users').select('*')
        res.json(Lista)
    }
}