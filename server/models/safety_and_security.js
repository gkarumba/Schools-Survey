'use strict';
module.exports = (sequelize, DataTypes) => {
  const Safety_And_Security = sequelize.define('Safety_And_Security', {
    safety_security: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    natural_disaster: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fire_extinguishers: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    cctvs: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    fire_drills: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doors_windows: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    security_night: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    disaster_plan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    other_safety_measures: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fire_assembly: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    fire_assembly_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    member: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    trainings: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {});
  Safety_And_Security.associate = (models) => {
    Safety_And_Security.belongsTo(models.Profile, {
      foreignKey: 'profileId',
      onDelete: 'CASCADE',
    });
  };
  return Safety_And_Security;
};