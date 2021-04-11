const http = require('http')

const port = process.env.PORT || 1337

const server = http.createServer((req, res) => {
  res.end('hi')
})


server.listen(port)
console.log(`Server listening on port ${port}`)