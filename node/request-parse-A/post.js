const http = require('http');

http.createServer((req, res) => {
    console.log(req.method, req.url);
    console.log('content-type', req.headers['content-type'])
    if(req.method === 'POST' && req.url === '/user') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        })
        req.on('end', () => {
            if(req.headers['content-type'] === 'application/json'){
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            })
        }
            res.end(data);
        })
    }
    res.end('post');
})
.listen(3000, () => {
    console.log('服务运行在3000端口');
})