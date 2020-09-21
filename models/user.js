//Model for creating table in database
var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5]
          }
      },
      passwordConfirmed: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5]
          }
      },
      zoomLink: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1]
          }
      },
      prefDrink: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1]
          }
        }
    });
  
    User.associate = function(models) {
      // We're saying that a Guest should belong to a User
      // A Guest can't be created without a User due to the foreign key constraint
      User.belongsTo(models.Guest, {
        foreignKey: {
          allowNull: false
        }
      });
    };

//Comparing hashed and unhashed passwords
 User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

//Hash the password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};