<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
    var Drink = sequelize.define("Drink", {   
      strDrink: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },                    
        strDrinkAlternate: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strDrinkES: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },   
        strDrinkDE: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strDrinkFR: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strDrinkZHHANS: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strDrinkZHHANT: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strTags: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strVideo: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strCategory: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
        strIBA: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strAlcoholic: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strGlass: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
        strInstructions: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strInstructionsES: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strInstructionsDE: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strInstructionsFR: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strInstructionsZHHANS: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strInstructionsZHHANT: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strDrinkThumb: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
        strIngredient1: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        strIngredient2: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        strIngredient3: {
            type: DataTypes.STRING,
            allowNull: true,
          }, 
        strIngredient4: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strIngredient5: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strIngredient6: {
            type: DataTypes.STRING,
            allowNull: true,
          }, 
        strIngredient7: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strIngredient8:{
            type: DataTypes.STRING,
            allowNull: true,
          }, 
        strIngredient9: {
            type: DataTypes.STRING,
            allowNull: true,
          }, 
        strIngredient10: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strIngredient11: {
            type: DataTypes.STRING,
            allowNull: true,
          }, 
        strIngredient12: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strIngredient13: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strIngredient14: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strIngredient15: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure1: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure2: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure3: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure4: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure5: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure6: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure7: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure8: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure9: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure10: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure11: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure12: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure13: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure14: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strMeasure15: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        strCreativeCommonsConfirmed: {
            type: DataTypes.STRING,
            allowNull: false,
          }
      });
      
    Drink.associate = function(models) {
      Drink.hasMany(models.User, {
        onDelete: "cascade"
      });
    };
  
    return Drink;
  }; 
=======
module.exports = function (sequelize, DataTypes) {
  var Drink = sequelize.define('Drink', {
    idDrink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strDrink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strDrinkAlternate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strDrinkES: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strDrinkDE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strDrinkFR: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strDrinkZHHANS: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strDrinkZHHANT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strTags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strVideo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIBA: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strAlcoholic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strGlass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strInstructions: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    strInstructionsES: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strInstructionsDE: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    strInstructionsFR: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strInstructionsZHHANS: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strInstructionsZHHANT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strDrinkThumb: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient8: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient9: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient10: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient11: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient12: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient13: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient14: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient15: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure8: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure9: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure10: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure11: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure12: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure13: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure14: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure15: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strCreativeCommonsConfirmed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Drink.associate = function (models) {
    Drink.hasMany(models.User, {
      onDelete: 'cascade',
    });
  };
  return Drink;
};
>>>>>>> bb7e660fd0d89235eb73703f84713417e4df64f1
