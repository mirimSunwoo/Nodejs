# Node.js 생활코딩📒

* __수업소개__
    * 웹페이지를 자동적으로 만들 수 있는 Server Side Application을 만듦<br>
JavaScript성능개선을 위해 v8을 만듦, v8을 기반으로하는 node.js를 만듦<br>
node.js : 웹브라우저가 아닌 컴퓨터 자체를 제어 함<br>
자바스크립트가 핫한언어로 변하게 해준 매개체

* __수업목적__
    * 페이지가 1억개가 있다면  node.js를 사용해서 한번에 바꿀 수 있다<br>
장고,php는 경쟁관계에 있다

* __웹서버 만들기__
   
    * ```console.log(__dirname + url);``` //디렉토리 경로를 터미널에 보여준다
    * ```response.end(fs.readFileSync(__dirname + url));```//경로에 대한 파일을 읽어서 가져온다.<br>
Node.js는 사용자에게 전송할 데이터를 생성한다

* __실행하는 방법__

    * ![image](https://user-images.githubusercontent.com/73941301/156971818-0e651398-686d-450b-ade6-6d71dc6a49c4.png)<br>
->실행할 곳으로 이동(cd명령어⭐)<br>
    * ![image](https://user-images.githubusercontent.com/73941301/156971661-7c961828-8b84-4451-ad4c-745c5af672dc.png)<br>
->실행 할 때는 node뒤에 경로 써주기/console.log로 실행하면 보이는 터미널 화면

* __url의 형식__
   * protocol / host(domain) / post / path / query string
   * http://opentutorials.org:3000/main?id=HTML&page=12
   * url이라고 하는 모듈을 사용한다 => require('url');
   * queryString에 따라 다른 정보를 출력하는 웹 애플리케이션 => response.end(queryData.id);
* __동적인 웹페이지__
    
   * ```var  title= queryData.id;```
   * ```<title>WEB1 - HTML</title> => <title>WEB1 - ${title}</title>```
   * ![image](https://user-images.githubusercontent.com/73941301/157686313-7e7593c1-5fc1-48bd-a0c9-8058fe192b15.png)
     ![image](https://user-images.githubusercontent.com/73941301/157686401-18b9b133-d51d-4c87-aad5-eaf595f8f7a7.png)
* __파일읽기__
   * CRUD : Create Read Update Delete 정보를 다루는 핵심적인 처리 방법
   * ``` var fs = require('fs');
         fs.readFile('sample.txt', 'utf8',function(err,data){
             console.log(data);
         });
     ```
   * ![image](https://user-images.githubusercontent.com/73941301/157787089-4b6fe42a-73d7-4205-8f6a-a3dbab2239c8.png)<br>
      => node가 상위 디렉터리에서 실행되었기 때문에 나오지 않는다
   * ![image](https://user-images.githubusercontent.com/73941301/157787203-2d83fb81-780c-41fa-a97f-48cd0539dfe3.png)<br>
      => cd로 경로를 바꿔주고 실행시켜주면 처음엔 버퍼 형태로 나오지만, 코드에 utf-8이라고 넣어주면 파일의 내용이 나온다
* __본문구현__
   * 세부페이지를 바꿨더라도 reload를 하지 않아도 바로 반영이 된다 => 실행될때마다 내용을 읽기 때문에 실시간으로 바뀐다
* __비교연산자__
   * = Boolean datatype
   * Comperison operator : 비교 연산자
   * boolean은 데이터 타입이기 때문에 변수로 사용하지 못한다(true=1 x)
* __제어문__
   * 똑똑한 프로그램을 만들 수 있다
   * 조건문은 제어문의 대표적인 사례이다(프로그램의 실행 흐름제어)
* __콘솔__
   * input(parameter argument) => output
   * ``` var args = process.argv; ``` -> 콘솔로 입력받기
      * 출력해보면 배열로 되어있다. 입력한정보는 3번째 즉 [2]부터 들어가게 된다
* __Not found__
   * path는 queryString포함되어있다 ('/?id=CSS')
   * pathName은 queryString이 포함되어있지 않다 ('/')
   * ```response.writeHead(200);``` 서버가 브라우저에게 200을 주면 성공적으로 파일 전송 완료 
   * ```response.writeHead(404);``` 서버가 브라우저에게 404 주면 Not found를 출력
   * ![image](https://user-images.githubusercontent.com/73941301/159114613-538bd64a-6d89-48e7-b068-1a66b73c5a5c.png)
* __홈페이지 구현__
   * ![image](https://user-images.githubusercontent.com/73941301/159115036-7c442903-b542-4f3c-8173-662fa4440982.png)
   * ```if(queryData.id === undefined)```=>반복문 중첩
      * querydata.id가 존재하지 않는다면(undefined)이라는 코드로 홈인지를 판단한다
* __반복문__
   * **while** : 어떤 조건문이 참이기만 하면 문장을 계속해서 반복한다
   * **for** : 특정 조건이 거짓으로 판별될 때까지 반복한다
   * **forEach** : for문과 유사하지만 index와 조건식,increase를 정의하지 않아도 callback함수를 통해 기능 수행이 가능하다
   * **do while** : 조건문을 확인하기 전에 한번은 실행한다. for문과 유사한 특징
   * **for in** : 객체의 열거 속성을 통해 지정된 변수를 바복한다
   * **for of** : 각각의 고유한 특성의 값을 실행할 명령과 함께 사용자 지정 반복후크를 호출하여 반복가능한 객체를 통해 반복하는 루프를 만든다
* __배열__
   * ```var arr = ['A','B','C','D'];``` => 배열 생성
   * ```console.log(arr[1]);``` => 값 불러오기
   * ```arr[2] = 3;``` => 배열 값 변경
   * ```console.log(arr.length);``` => 데이터의 개수
   * ```arr.push('E');``` => 데이터 (맨 뒤에)삽입

* __파일목록 알아내기__
   * ```
      fs.readdir(testFolder, function(error, filelist){
          console.log(filelist);
      })
     ```
   * => data에 파일이 삽입되면 읽어서 list로 출력
*  __함수__
   * 함수는 프로그램에 대해 이름을 붙이는 것과 같다.
   * 함수를 사용하면 정확하게 똑같은 코드라고 확신할 수 있다.
   * 유지보수의 편리성이 있다
   * 중복되는 코드를 최소화 한다
   * ```
      function sum(first,second){ //parameter(매개변수)
          return first+second; //return = 어떤값을 출력한다 + 함수를 종료시킨다
      }
      console.log(sum(2,4)); //argument
     ```
* __수업을 마치며__
   * 초심자를 위한 수업 가이드는 끝이 났지만, 강의를 들으면서 이해안되는 부분도 있어서 그부분은 다시 강의를 듣고, 뒤에 부분도 천천히 들어 볼 생각입니다ผ(•̀_•́ผ)
* __동기(synchronous)/비동기(asynchronous)/콜백__
   * 동기 : 일을 순차적으로 진행 / 비동기 : 동시에 일을 처리함
   * 비동기는 동기보다 효율적이지만 복잡하다
