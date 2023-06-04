const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
   
    sequelize.define('Transaction', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
          },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          description: {
            type: DataTypes.STRING,
            allowNull: true
          },
          isCompleted: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
          },
          userId: {
            type: DataTypes.UUID,
            allowNull: true,
          },
                    
    },
    );
  };
