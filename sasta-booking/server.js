const http = require('http');

const PORT = 4000

const serverHandler = (request, response)=>{
    if(request.url==="/cities"){
        
        const data = [
            "Patna",
            "Raipur",
            "Delhi"
        ]

        response.end(JSON.stringify(data))
    }
}

const server = http.createServer(serverHandler);

server.listen(PORT, ()=>{
    console.log("HTTP Server is running on port - ", PORT)
})

