module.exports = function(sequelize, DataTypes) {
    var SavedCocktail = sequelize.define("SavedCocktail", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          cocktailID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
              }
          }
    });
  /*
    SavedCocktail.associate = function(models) {
      SavedCocktail.hasMany(models.User, {
        onDelete: "cascade"
      });
    };
  */
    return SavedCocktail;
  }; 