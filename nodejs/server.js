let http = require('http'),
    url = require('url'),
    fs = require('fs');

http
.createServer(function(request, response){
    let pathname = url.parse(request.url).pathname;
    console.log('requesting ' + pathname);
    switch(pathname){
        case '/list': 
            provideData(response);
            break;
        case '/':
        case '/index.html':
            provideIndexPage(response);
            break;
        default: 
            provideStatic('.'+ pathname, response);
            break;
    }
})
.listen(4000);
console.log('The node server is listening 4000');


function provideData(response){
    provideStatic('./static/data.json', response);
}

function provideIndexPage(response){
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', function (err, data) {
        if(err){
            console.log(err);
            return;
        }else{
            response.write(data);
            response.end();
        }
    });    
}

function provideStatic(pathname, response){
    fs.readFile(pathname, function (err, data) {
        if(err){
            console.log(err);
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            response.write('404 Not Found.');
            response.end();
        }else{
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.write(data);
            response.end();
        }
    });  
}