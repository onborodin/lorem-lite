
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('files', function(table) {
            table.increments('id').primary().unique()
            table.string('blob_name')
            table.string('file_name')
            table.string('mime_type')
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
}
exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable('files')
}
