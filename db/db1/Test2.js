module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Test2',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      text: {
        type: DataTypes.STRING
      }
    },
    {
      debug: true
    })
}
