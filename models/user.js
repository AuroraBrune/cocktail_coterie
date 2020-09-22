//Model for creating table in database
var bcrypt = require("bcryptjs");
//var sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'firstName',
        validate: {
          len: [1]
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'lastName',
        validate: {
            len: [1]
          }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'email',
        unique: true,
        validate: {
          isEmail: true
        }
      },
      userName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        field: 'password',
        validate: {
            len: [5]
          }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'passwordConfirmed',
        validate: {
            len: [5]
          }
      },
      zoomLink: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'zoomLink',
        validate: {
            len: [1]
          }
      },
      prefDrink: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'prefDrink',
        validate: {
            len: [1]
          }
        }
    });
    User.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      User.belongsTo(models.User, {
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
//had a null after genSalt
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });
  return User;
};

/* sequelize.sync()
.then (() => console.log('User Added')); */
