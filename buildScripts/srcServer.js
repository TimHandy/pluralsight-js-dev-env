// run $ node buildScripts/srcServer.js to launch the server and browser

import express from 'express' // can use import and const because of using babel-node (see the package.json)
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev.js'

/* eslint-disable no-console */  // if there are console.log statements here, eslint will now ignore them.

const port = 3000
const app = express()
const compiler = webpack(config)

// integrate Webpack with Express
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.get('/users', function(req, res) {
  // hard-coding for simplicity; pretend this hits a real database
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob.smith@mail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@mail.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "tina.lee@mail.com"}
  ])
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port) // launches the browser
  }
})
