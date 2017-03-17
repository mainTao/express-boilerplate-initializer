const service = require('./service')

exports.upload = (req, res, next) => {
  service.storeFiles(req.files)
    .then(result => {
      res.end()
    })
    .catch(err => {
      next(err)
    })
}

exports.test = (req, res, next) => {
  console.log('test')
  res.json({message: req.data.idNo})
}
