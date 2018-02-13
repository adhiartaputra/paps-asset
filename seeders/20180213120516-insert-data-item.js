'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Items', [{
        name: 'Ice Coffee',
        price: 10000
      },{
        name: 'Ice Tea',
        price: 5000
      },{
        name: 'Ice Chocolate',
        price: 15000
      }]);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
