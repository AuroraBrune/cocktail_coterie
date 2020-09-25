module.exports = function (sequelize, DataTypes) {
  var SavedDrink = sequelize.define('SavedDrink', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    drinkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  return SavedDrink;
};
