function addGlobalConst(name, value) {
  Object.defineProperty(global, name, {value: value})
}

addGlobalConst('addGlobalConst', addGlobalConst)
addGlobalConst('express', require('express'))
addGlobalConst('_', require('lodash'))
addGlobalConst('Promise', require('bluebird'))
addGlobalConst('fs', Promise.promisifyAll(require('fs')))
addGlobalConst('Sequelize', require('sequelize'))
addGlobalConst('conf', require('config'))
addGlobalConst('axios', require('axios'))
addGlobalConst('backbone', new (require('events').EventEmitter)())
addGlobalConst('box', require('../box'))

const initDb = require('./init-db') // global const: db
const initRedis = require('./init-redis') // global const: redisClient

exports.init = () => {
  return initDb()
    .then(() => {
      return initRedis()
    })
}