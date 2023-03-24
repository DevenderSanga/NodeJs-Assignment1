var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url == "/welcome") {
        res.writeHead(200)
        res.write(" Welcome to Dominos!")
        res.end()
    }
    else if (req.url == "/contact") {
        const contact = {
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }
        res.writeHead(200)
        res.write(JSON.stringify(contact))
        res.end()
    }else{
        res.writeHead(404)
        res.write("404 Not Found")
        res.end()
    }


}
httpServer.listen(8081, () => {
    console.log('Listening on port 8081...');
})


module.exports = httpServer;