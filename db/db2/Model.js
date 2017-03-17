module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Model',
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
