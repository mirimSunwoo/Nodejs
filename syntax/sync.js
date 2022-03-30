var fs = require('fs');

/*
//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt','utf8');
console.log(result);
console.log('C');
*/

//비동기(Sync가 없음) => node가 선호함
console.log('A');
var result = fs.readFile('syntax/sample.txt','utf8',function(err,result){ //파일을 읽어와, 작업이 끝나면 함수안에 있는 일을 처리해
    console.log(result);
});
console.log('C');