# Node.js 생활코딩🐱‍🐉

* 수업소개
    * 웹페이지를 자동적으로 만들 수 있는 Server Side Application을 만듦<br>
JavaScript성능개선을 위해 v8을 만듦, v8을 기반으로하는 node.js를 만듦<br>
node.js : 웹브라우저가 아닌 컴퓨터 자체를 제어 함<br>
자바스크립트가 핫한언어로 변하게 해준 매개체

* 수업목적
    * 페이지가 1억개가 있다면  node.js를 사용해서 한번에 바꿀 수 있다<br>
장고,php는 경쟁관계에 있다

* 웹서버 만들기
    * console.log(__dirname + url); //디렉토리 경로를 터미널에 보여준다<br>
response.end(fs.readFileSync(__dirname + url));//경로에 대한 파일을 읽어서 가져온다.<br>
Node.js는 사용자에게 전송할 데이터를 생성한다

* 실행하는 방법

    * ![image](https://user-images.githubusercontent.com/73941301/156971818-0e651398-686d-450b-ade6-6d71dc6a49c4.png)<br>
->실행할 곳으로 이동(cd명령어⭐)<br>
    * ![image](https://user-images.githubusercontent.com/73941301/156971661-7c961828-8b84-4451-ad4c-745c5af672dc.png)<br>
->실행 할 때는 node뒤에 경로 써주기/console.log로 실행하면 보이는 터미널 화면

* url의 형식
   * protocol / host(domain) / post / path / query string
   * http://opentutorials.org:3000/main?id=HTML&page=12
   * url이라고 하는 모듈을 사용한다 => require('url');
   * queryString에 따라 다른 정보를 출력하는 웹 애플리케이션 => response.end(queryData.id);
