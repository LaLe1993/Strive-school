console.log("-----EXERCISE 6-----");
let splitString = [];
let str = "Da li je resenje ovoga stringa 5 ili 2";
splitString = str.split(" ");
for (i=0;i<splitString.length;i++){
    if (parseInt(splitString[i] === NaN)){
        console.log("Opet")
    }else{
        delete splitString[i];
    }
}
console.log(splitString);