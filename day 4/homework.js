
/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
console.log("-------EXERCISE 1-------")
const area = function(l1,l2){
    areaOfRectangle = l1 * l2;
    return areaOfRectangle;
}
rectangleArea = area(10,5);
console.log(rectangleArea);

//EXERCISE 1 Arrow way
console.log("-------EXERCISE 1-------")
console.log("------USING ARROW-------")

const area1 = (l3,l4) => {
    area2 = l3 * l4;
    return area2;
}

recArea = area1 (10,5);
console.log(recArea);

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
console.log("-------EXERCISE 2-------")
const crazySum = function(x1,x2) {
    if (x1 !== x2){
        sum = x1 + x2;
    }else{
        sum = x1 + x1 + x1;
    }
    return sum;
}
let sumCrazySum = crazySum(3,4);
console.log(sumCrazySum);

let sum1CrazySum = crazySum(4,4);
console.log(sum1CrazySum);

////EXERCISE 2 Arrow way
console.log("-------EXERCISE 2 USING ARROW-------")
const crazySum1 = (x3,x4) => {
    if (x3 !== x4){
        sum = x3 + x4;
    }else{
        sum = x3 + x3 + x3;
    }
    return sum;
}
let sum2CrazySum = crazySum1(3,4);
console.log(sum2CrazySum);

let sum3CrazySum = crazySum1(4,4);
console.log(sum3CrazySum);

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
console.log("-------EXERCISE 3 USING ARROW-------")
const crazyDiff = (y1) => {
    if(y1 <= 19) {
        let diffCrazyDiff = 19 - y1;
        return diffCrazyDiff;
    }else{
        let diffCrazyDiff = Math.abs(19-y1) * 3;
        return diffCrazyDiff;
    }
}
let diffCrazyDiffResult = crazyDiff(5);
console.log(diffCrazyDiffResult);

let diffCrazyDiffResult1 = crazyDiff(24);
console.log(diffCrazyDiffResult1);


/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */
console.log("-------EXERCISE 4 USING ARROW-------")
const boundary = (N) => {
    if (20<= N && N <=100 || N === 400) {
        return true;
    }else{
        return false;
    }
}
let boundaryResult1 = boundary(20);
console.log(boundaryResult1);
let boundaryResult2 = boundary(100);
console.log(boundaryResult2);
let boundaryResult3 = boundary(400);
console.log(boundaryResult3);
let boundaryResult4 = boundary(5);
console.log(boundaryResult4);

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" 
then return the original string.
*/

/* WRITE YOUR CODE HERE */
console.log("-------EXERCISE 5 USING ARROW-------")
const strivify = (S) => {
    let str = S.startsWith("Strive");
    console.log(str);
    if (str === true){
        return S;
    }else{
        S = "Strive " + S;
        return S;
    }
}
let str2=strivify("What is going on?");
console.log(str2);

let str3=strivify("Strive is going on?");
console.log(str3);


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
console.log("-------EXERCISE 6 USING ARROW-------")
const check3and7 = (Z) => {
    if (Z>0){
        if (Z % 3 === 0 && Z % 7 !== 0){
            console.log(Z + " is a multiple of 3!");
        }else if (Z % 3 !== 0 && Z % 7 === 0){
            console.log(Z + " is a multiple of 7!");
        }else if(Z % 3 === 0 && Z % 7 === 0){
            console.log(Z + " is a multiple of 3 and 7!");
        }else{
            console.log(Z + " is't a multiple of 3 or 7!");
        }
    }
}
check3and7(48);
check3and7(28);
check3and7(84);
check3and7(13);

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
console.log("-------EXERCISE 7 USING ARROW LONG-------")
const reverseString = (revStr) => {
    let splitString = revStr.split("");
    let reverseArray = splitString.reverse();
    splitString = reverseArray.join("");
    return splitString;
}
let stringToReverse = reverseString("Strive is No.1!");
console.log(stringToReverse);


console.log("-------EXERCISE 7 USING ARROW SHORT-------")
const reverseString1 = (revStr1) => {
return revStr1.split("").reverse().join("");
}
let stringToReverseShort = reverseString1("Strive is No.1!");
console.log(stringToReverseShort);
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */

console.log("-------EXERCISE 8 USING ARROW-------")
const upperFirst = (sentence) => {
    let splitStr = sentence.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);   
        console.log(splitStr);  
    }
    return splitStr.join(' '); 
}
let upperCaseFirst = upperFirst("Lets check does every word starts with uppercase letter!");
console.log(upperCaseFirst);

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
console.log("-------EXERCISE 9 USING ARROW-------")
const cutString = (cutSentence) => {
    let cutSentence1 = cutSentence.substring(1,cutSentence.length-1);
    return cutSentence1;
}
let mySentenceCut = cutString("aDid this worked?a");
console.log(mySentenceCut);

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */
console.log("-------EXERCISE 10 USING ARROW-------")
const giveMeRandom = (n) => {
    let myArray = [];
    for (index=0;index<n;index++){
        myArray.push(Math.floor(Math.random() * 11));
    }
    return myArray;
}
let myRandomArray = giveMeRandom(24);
console.log(myRandomArray);


/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
