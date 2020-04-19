const http = require('http');
const { spawn } = require('child_process');

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
  res.writeHead(200, {'Content-Type': 'application/json'});
  if(req.url === '/api/restart/doc' && req.body.ref === 'refs/heads/master'){
    const ls = spawn('bash', [__dirname + '/pull.sh']);
    let error = '';
    ls.stdout.on('data', (buffer) => {
      console.log(`stdout: ${buffer}`);
    });
    ls.stderr.on('data', (buffer) => {
      console.error(`stderror: ${buffer}`);
      error = buffer.toString();
    });
    ls.on('close', (code) => {
      res.end({
        code,
        ok: code === 0,
        error: code === 0 ? '' : error
      });
    });
  }else{
    res.end({
      code: 1,
      ok: false,
      error: ''
    });
  }
}


