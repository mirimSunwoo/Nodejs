//자바스크립트에서 문자를 표현하는 편리한 방법
var name="egoing"
//코드에서의 줄바꿈 => 실제로 적용안됨 
//\n은 실제로 적용됨
var letter= "Dear "+name+"\n\
\n\
 Lorem Ipsum is simply dummy text of the printing "+name+" and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"+name+" but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets "+name+" containing Lorem Ipsum p "+name+" assages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
console.log(letter);

var letter= `Dear ${name}

Lorem Ipsum is simply dummy text of the printing ${name} and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,${name} but also the leap into electronic typesetting, remaining essentially unchanged. It was popu"larised in the 1960s with the release of Letraset sheets ${1+1} containing Lorem Ipsum p ${name} assages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
console.log(letter);

//리털럴이란? 정보를 표현하는 방법 (`~`) => 특수기호를 안써도 된다는 장점
