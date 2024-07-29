const http = require('http');

const url = require('url');

const PORT = 4000

var DATABASE = [
    {
        id : 1,
        name : "Bhillai",
        adventurePlaces : 0        
    },
    {
        id : 2,
        name : "Mumbai",
        adventurePlaces : 10       
    },
    {
        id : 3,
        name : "Delhi",
        adventurePlaces : 8      
    }
]

const serverHandler = (request, response)=>{

    const {url : request_url, method} = request // we are getting url and method

    const { pathname, query } = url.parse(request_url, true)


    if(pathname==="/cities" && method==="GET"){

        response.writeHead(200, {'Content-Type' : 'application/json'})

        const result = {
            success : true,
            data : DATABASE
        }

        response.end(JSON.stringify(result))

    }else if(pathname==="/cities/add" && method==="POST"){

        let body = "";

        request.on("data", (chunk)=>{
            body+=chunk.toString()
        })

        request.on("end", ()=>{

            const REQUEST_PAYLOAD = JSON.parse(body)

            console.log(REQUEST_PAYLOAD)

            const { name, adventurePlaces } = REQUEST_PAYLOAD

            DATABASE.push({
                id : DATABASE.length + 1,
                name,
                adventurePlaces
            })

            response.writeHead(201, {'Content-Type' : 'application/json'})

            const result = {
                success : true,
            }

            response.end(JSON.stringify(result))


        })

    }else if(pathname==="/cities/update" && method==="PUT"){

    }else if(pathname==="/cities/delete" && method==="DELETE"){

    }else{

        response.writeHead(404, {'Content-Type' : 'application/json'})

        const result = {
            success : false,
            message : "API NOT FOUND"
        }

        response.end(JSON.stringify(result))

    }
}

const server = http.createServer(serverHandler);

server.listen(PORT, ()=>{
    console.log("HTTP Server is running on port - ", PORT)
})

