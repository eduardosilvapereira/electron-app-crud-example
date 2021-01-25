const express = require('express')
const jsonServer = require('json-server')

const PORT = process.env.PORT || 3001;

const server = express();
const apiRoutes = jsonServer.router('src/db.json')

server.use('/api',apiRoutes)
server.listen(PORT, () => {
  console.log('The server is running on port ' + PORT)
})