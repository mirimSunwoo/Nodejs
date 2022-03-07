var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;    
    }
    response.writeHead(200);
    console.log(__dirname + url); //디렉토리 경로를 터미널에 보여준다
    response.end(fs.readFileSync(__dirname + url));//경로에 대한 파일을 읽어서 가져온다
    //사용자에게 전송할 데이터를 생성한다
 
});
app.listen(3000);

