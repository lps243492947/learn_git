'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
}
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'shops',
    [

    ]
  ),

  down: (queryInterface, Sequelize) => {
    const {Op} = Sequelize;
    return queryInterface.bulkDelete('shops', {
      id: {
        [Op.in]: [1,2,3,4]
      }
    }, {})
  }
};
