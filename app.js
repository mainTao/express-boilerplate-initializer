const express = require('express')
const vhost = require('vhost')

// main-app
const app = express()

// sub-app
const api = require('./api/app')
const admin = require('./admin/app')
const h5 = require('./h5/app')

app.use(vhost('admin.fnmain.com', admin))

app.use(vhost('api.fnmain.com', api))

app.use(vhost('www.fnmain.com', h5))
app.use(vhost('fnmain.com', h5))

app.use(function (req, res) {
  console.error('404 in main app')
  res.status(404).send('Not Found')
})

module.exports = app