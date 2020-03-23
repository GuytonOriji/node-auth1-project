
exports.up = function(knex) {
  return knex.schema.createTable('users',tbl_col=>{
  	tbl_col.increments()//id

  	tbl_col.string('username',90)//clients username

  	tbl_col.string('password',90)//clients password

  })


};

exports.down = function(knex) {
 return knex.schema.dropTableIfExists('users')
};
