var number = [1,400,5,212,34,5]; //element

var i = 0;
var total = 0;

while(i < number.length){
    console.log(number[i]);
    total += number[i]
    i += 1;
}
console.log(`total : ${total}`);