'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('actor', [
      {
        actor_id: 201,
        first_name: 'aryaa',
        last_name: 'tampan',
        last_update: new Date()
      },
      {
        actor_id: 202,
        first_name: 'arya',
        last_name: 'suherman',
        last_update: new Date()
      },
      {
        actor_id: 203,
        first_name: 'jamet',
        last_name: 'uhuyy',
        last_update: new Date()
      },
      {
        actor_id: 204,
        first_name: 'mang',
        last_name: 'oleh',
        last_update: new Date()
      },
      {
        actor_id: 205,
        first_name: 'pubg',
        last_name: 'selamanya',
        last_update: new Date()
      },
    ]);
    
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('actor', null, {});
  }
};
