addGlobalConst('db', require('../db'))

module.exports = () => {
  return Promise.each(_.values(db), db => {
      return db.sync()
        .then(() => {
          console.log(`db sync success: ${db.config.database}`)
        })
        .catch(err => {
          console.error(`db sync fail: ${db.config.database};`, err)
          throw err
        })
    })
    .then(() => {
      console.log('init db success')
    })
}
