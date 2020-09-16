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
      userName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: [5]
          }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5]
          }
      }
    });
  
    User.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Post.belongsTo(models.Guests, {
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