'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Safety_And_Securities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      safety_security: {
        type: Sequelize.STRING
      },
      natural_disaster: {
        type: Sequelize.STRING
      },
      fire_extinguishers: {
        type: Sequelize.BOOLEAN
      },
      cctvs: {
        type: Sequelize.BOOLEAN
      },
      fire_drills: {
        type: Sequelize.STRING
      },
      doors_windows: {
        type: Sequelize.BOOLEAN
      },
      security_night: {
        type: Sequelize.STRING
      },
      disaster_plan: {
        type: Sequelize.STRING
      },
      other_safety_measures: {
        type: Sequelize.STRING
      },
      fire_assembly: {
        type: Sequelize.BOOLEAN
      },
      fire_assembly_no: {
        type: Sequelize.INTEGER
      },
      member: {
        type: Sequelize.BOOLEAN
      },
      trainings: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      profileId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Profiles',
          key: 'id',
          as: 'profileId',
        },
      },
    }),
  
  down: (queryInterface /* , Sequelize */) => {
    return queryInterface.dropTable('Safety_And_Securities');
  }
};