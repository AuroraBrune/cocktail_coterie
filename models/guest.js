module.exports = function(sequelize, DataTypes) {
  var Guest = sequelize.define("Guest", {
      firstName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
            }
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        prefDrink: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
            }
          }
    });
/*
  Guest.associate = function(models) {
    Guest.hasMany(models.User, {
      onDelete: "cascade"
    });
  };
*/
  return Guest;
}; 