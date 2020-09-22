//Model for creating table in database
var bcrypt = require("bcryptjs");
//var sequelize = require("sequelize");

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
        allowNull: true,
        validate: {
            len: [5]
          }
      },
      zoomLink: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      prefDrink: {
        type: DataTypes.STRING,
        allowNull: true,
        }
    });
    //validate can be gone for non essential, allownUll true
  /*  User.associate = function(models) {
      User.hasOne(models.Drink, {
        foreignKey: 'prefDrink'
      });
    };*/
//Comparing hashed and unhashed passwords
 User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
//Hash the password
//had a null after genSalt
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });
  return User;
};

/* sequelize.sync()
.then (() => console.log('User Added')); */
