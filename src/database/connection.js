const knex = require('knex')
const data_config= require('../../knexfile')

const connection = knex(data_config.development)

module.exports = connection