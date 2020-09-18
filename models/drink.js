module.exports = function(sequelize, DataTypes) {
    var Drink = sequelize.define("Drink", {
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },  
      showDrink: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true
      },    
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
            validate: {
              len: [1]
            }
          },
        strIngredient2: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
        strIngredient3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strIngredient4: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strIngredient5: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strIngredient6: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strIngredient7: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strIngredient8:{
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strIngredient9: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strIngredient10: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strIngredient11: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          }, 
        strIngredient12: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strIngredient13: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strIngredient14: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strIngredient15: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure1: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure4: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure5: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure6: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure7: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure8: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure9: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure10: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure11: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure12: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure13: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure14: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strMeasure15: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
        strCreativeCommonsConfirmed: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          }
      });
      
    Drink.associate = function(models) {
      Drink.hasMany(models.User, {
        onDelete: "cascade"
      });
    };
  
    return Drink;
  }; 