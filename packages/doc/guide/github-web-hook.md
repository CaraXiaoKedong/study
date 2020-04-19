# Github webhook触发服务部署

> 当github的指定事件（例如push）被触发时，会主动向Webhook的配置URL发送POST请求。该功能可用于更新外部问题跟踪器，触发CI构建，更新备份镜像，甚至部署到您的生产服务器。

## 配置webhook

* 进入 `https://github.com/CaraXiaoKedong/study`

* 切换至Tab页 `settings`

* 点击侧边栏的 `webhooks`

* 点击右上角 `Add webhook`

* 创建webhook
  - `Payload URL` 指定事件触发的回调URL（部署服务的API） 
  - `Content type` 选择post请求的类型
  - `Which events would you like to trigger this webhook` 订阅触发的事件类型。例如选择Just the push event的话，在发生push到github仓库事件事时主动执行该URL

## 搭建Node服务作为webhook的回调URL

### 创建Node服务

```javascript

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
  // 限定为master主分支提交时触发回调URL
  if(req.url === '/api/restart/doc' && req.body.ref === 'refs/heads/master'){
    // 开启了一个子进程来执行sh命令，实现部署
    const ls = spawn('bash', [__dirname + '/deploy.sh']);
    let error = '';
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
  }
}
```





