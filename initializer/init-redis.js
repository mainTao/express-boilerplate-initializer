addGlobalConst('redis', require('redis'))
Promise.promisifyAll(redis.RedisClient.prototype)
Promise.promisifyAll(redis.Multi.prototype)

module.exports = (mandatory = false) => {
  const redisClient = redis.createClient(conf.redis)
  addGlobalConst('redisClient', redisClient)

  return new Promise((resolve, reject) => {
    function redisError(err) {
      console.trace('here')
      console.error('redis error', err)
    }

    function connectFail(err) {
      console.error('init redis fail', err)
      redisClient.on('error', redisError)
      if(mandatory){
        reject(err)
      }
      else{
        resolve()
      }
    }

    function connectSuccess() {
      console.log('init redis success')
      redisClient
        .removeListener('error', connectFail)
        .on('error', redisError)
      resolve()
    }

    redisClient
      .once('ready', connectSuccess)
      .once('error', connectFail)
  })
}