'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    form: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telephone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    filler: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nemis: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    social_media: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Profile.associate = (models) => {
    Profile.hasMany(models.Safety_And_Security, {
      foreignKey: 'profileId',
      as: 'safety_and_securities',
    });
  };
  return Profile;
};