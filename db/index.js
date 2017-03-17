const db = {}

function importModels(database, relativeDirPath) {
  db[relativeDirPath] = database

  let fullDirPath = `${__dirname}/${relativeDirPath}`

  fs.readdirSync(fullDirPath).filter(function (file) {
    return file.indexOf('.') !== 0
  }).forEach(function (file) {
    let model = database.import(`${fullDirPath}/${file}`)
    database[model.name] = model

    Object.keys(database).forEach(function (modelName) {
      if ('associate' in database[modelName]) {
        database[modelName].associate(database)
      }
    })
  })
}

fs.readdirSync(__dirname)
  .forEach(entry => {
    let dirPath = `${__dirname}/${entry}`
    let stat = fs.statSync(dirPath)
    if (stat.isDirectory() && entry.indexOf('.') !== 0) {
      let dbName = entry
      let dbConf = conf.db[dbName]
      let db = new Sequelize(dbConf.database, dbConf.user, dbConf.password, dbConf.options)
      importModels(db, dbName)
    }
  })

module.exports = db