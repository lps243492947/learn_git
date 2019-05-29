const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
http.createServer((req, res) => {
    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
        // 解析文件
        const form = new formidable.IncomingForm();
        form.uploadDir = './static/';
        form.parse(req, (err, fields, files) => {
            console.log(fields, files);
            const oldPath = files.upload.path;
            const fileName = files.upload.name;
            const dirname = path.dirname(oldPath)
            const newPath = path.join(dirname, fileName);
            fs.rename(oldPath, newPath, (err) => {
                res.writeHead(200, {
                    'Content-Type': 'text/html;charset=utf8'
                });
                res.end('文件上传完毕');
            })
        })
        return false;
    }
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    });
    res.end(
        ` <form action="/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="upload">
        <input type="text" name="nickname">
        <input type="submit" value="submit">
    </form>`
    )
}).listen(8080, () => {
    console.log('server is running port 8080');
})