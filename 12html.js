const http = require('http');

const server = http.createServer((req,res) => {
  if(req.url === '/'){
    res.end("Hello this is our landing page");
  }
  if(req.url === '/about'){
    res.end("This is about section.")
  }
 res.end(`
  <h1> This is html inside js</h1>
  <p>We can't seem to find what you are looking for.</p>
  <a href = "/">Try going to out home page</a>`
 )
})

server.listen(3001);