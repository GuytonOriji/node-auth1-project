
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'jojo_x_-',password:"b2i4bCx3x6n464"},
        {id: 2, username: 'xRocketZ_X',password:"b2i4bCx3x6n464"},
        {id: 3, username: 'Geshmane24',password:"b2i4bCx3x6n464"}
      ]);
    });
};
