import * as http from "http";

const server = http.createServer((req:http.IncomingMessage, res: http.ServerResponse) => {
    if(req.url === "/"){ // home route
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.write('<h1>Home</h1>')
    }else if(req.url === "/about"){ // about route
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.write('<h1>About</h1>')
    }else if(req.url === "/my-account"){
        res.writeHead(403, {"Content-Type": "text/plain"})
        res.write('You have no access to this page')
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.write('Page not found')
    }
    res.end()
});

const PORT: number = 3500
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ...`)
}) 