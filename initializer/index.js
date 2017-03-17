function addGlobalConst(name, value) {
  Object.defineProperty(global, name, {value: value})
}

addGlobalConst('addGlobalConst', addGlobalConst)
addGlobalConst('_', require('lodash'))
addGlobalConst('Promise', require('bluebird'))
addGlobalConst('fs', Promise.promisifyAll(require('fs')))
addGlobalConst('Sequelize', require('sequelize'))
addGlobalConst('conf', require('config'))
addGlobalConst('axios', require('axios'))
addGlobalConst('backbone', new (require('events').EventEmitter)())
addGlobalConst('box', require('../box'))

const initDb = require('./init-db')
const initRedis = require('./init-redis')

exports.init = () => {
  return initDb()
    .then(() => {
      return initRedis()
    })
}