const http = require('http');

const server = http.createServer((req, res) => {
  const _end = res.end;
  res.end = function(){
    if(typeof arguments[0] === 'object'){
      arguments[0] = JSON.stringify(arguments[0]);
    }
    _end.apply(res, arguments);
  }
  if(req.method === 'POST'){
    bodyParse(req, res);
  }else{
    res.end('not found');
  }
});

server.listen('9001', () => {
  console.log("listening", 9001);
});


function bodyParse(req, res){
  const buffers = [];
  req.on('data', (chunk) => {
    buffers.push(chunk);
  }).on('end', () => {
    const body = Buffer.concat(buffers).toString();
    req.body = JSON.parse(body);
    routeHandler(req, res);
  })
}

function routeHandler(req, res) {
  if(req.url === '/api/restart/doc'){
    console.log(req.body);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(req.body);
  }
}


