module.exports = (sequelize, DataTypes) => {
  const Consults = sequelize.define('Consults', {
    userId: DataTypes.INTEGER,
  },
  {
    timestamps: true,
    tableName: 'Consults',
  });

  Consults.associate = (models) => {
    Consults.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'user',
    });
  }

  return Consults;
};
