const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Hello World!')
    res.end()
})

server.listen(process.env.PORT)
console.log(`Listening in PORT ${process.env.PORT}`)