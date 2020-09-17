exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.string('id').primary();
        table.string('nome').notNullable();
        table.decimal('numero').notNullable();
        table.string('email').notNullable();
    }
    )};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
