'use strict';

module.exports = {
  up: (queryInterface, _) => {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Felipe Somogyi',
      email: 'leaosomogyi@hotmail.com',
      password: '@abc123',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, _) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
