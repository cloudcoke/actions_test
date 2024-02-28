const http = require("http")
const myName = process.env.MY_NAME || "cloudcoke"

const hostname = "0.0.0.0"
const port = 3000

const server = http.createServer((req, res) => {
    if (req.url === "/health") {
        console.log(`{"host": "${req.headers.host}", "message": "health ok"}`)
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("health ok\n")
    } else {
        res.statusCode = 200
        console.log(`{"host": "${req.headers.host}", "message": "${req.headers["user-agent"]}"}`)
        res.setHeader("Content-Type", "text/plain")
        res.end(`Hello ${myName}\n`)
    }
})

server.listen(port, hostname, () => {
    console.log(`{"message": "Server running"}`)
})
