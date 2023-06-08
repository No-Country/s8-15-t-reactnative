const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('user', {
      
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
      },
  
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
       
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      alias: {
        type: DataTypes.STRING,
        unique: true
      },
      cvu: {
        type: DataTypes.STRING,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
      },
      dni:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      country:{
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {timestamps: false}
    );
  };