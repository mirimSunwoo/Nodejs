var http = require('http');
var fs = require('fs');
var url = require('url'); //url(모듈)을 요구하다

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url.url,true).query;
    console.log(queryData.id);
    if(_url == '/'){
      url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;    
    }
    response.writeHead(200);
    console.log(__dirname + url); //디렉토리 경로를 터미널에 보여준다
    response.end(queryData.id);//경로에 대한 파일을 읽어서 가져온다
    //사용자에게 전송할 데이터를 생성한다
 
});
app.listen(3000);

