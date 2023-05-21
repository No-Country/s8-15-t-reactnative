const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('user', {
      
     /*  user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
      }, */
  
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
       
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
        allowNull: true,
      },
      picture: {
        type: DataTypes.STRING,
       
      },
    
    },
    {timestamps: false}
    );
  };