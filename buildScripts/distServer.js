// run $ node buildScripts/distServer.js to launch the server and browser

// This is NOT for actual production use, it's just used to test that the build process worked and the minified and bundled app can be viewed locally and as expected before you push to live.

import express from 'express' // can use import and const because of using babel-node (see the package.json)
import path from 'path'
import open from 'open'
import compression from 'compression'  // this is gzip compression, you just have the additonal line below to use it and thats it, compression is now enabled.


/* eslint-disable no-console */  // if there are console.log statements here, eslint will now ignore them.

const port = 3000
const app = express()

app.use(compression())
app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
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
