module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    cpf: DataTypes.STRING,
    name: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    contact: DataTypes.STRING,
    cep: DataTypes.STRING,
    bank: DataTypes.STRING,
  },
  {
    timestamps: true,
    tableName: 'Users',
  });
  return Users;
};
