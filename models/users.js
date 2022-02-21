module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    fullName: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    contact: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    bank: DataTypes.STRING,
  },
  {
    timestamps: true,
    tableName: 'Users',
  });
  return Users;
};
