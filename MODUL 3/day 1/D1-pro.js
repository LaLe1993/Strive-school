/*
1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
let exp = "abcccccccd";
var expCounts = {};
var maxKey = '';
for(var i = 0; i < exp.length; i++)
{
    var key = exp[i];
    if(!expCounts[key]){
     expCounts[key] = 0;
    }
    expCounts[key]++;
    if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
        maxKey = key;
    }
}

console.debug(maxKey + ":" + expCounts[maxKey]);
/*
2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
let a = "Hi there"
let newStringA = a.replace(/[^A-Za-z]+/g, '').toLowerCase();
let b = "Bye there"
let newStringB = b.replace(/[^A-Za-z]+/g, '').toLowerCase();
const firstStr = newStringA.split("").sort().join("")
const secondSte = newStringB.split("").sort().join("")
firstStr === secondSte ? console.log("Strings are anagrams"):console.log("Strings are not anagrams")


/*
  
3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/
const mainWord = "listen".split("").sort().join("");
let myList = ["enlists","google","inlets","banana"];
let listOfAnagrams = [];
for(let i = 0; i<myList.length;i++){
    if(myList[i].split("").sort().join("") === mainWord){
        listOfAnagrams.push(myList[i])
    }
}
console.log(listOfAnagrams)

/*
4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
*/
let palindromeA = "abba"
let palindromeB = palindromeA.split("").reverse().join("")
console.log(palindromeA === palindromeB ? "String is palindrome" : "String is not palindrome");

/*
5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
*/
let num = -15;
let newNumber = num.toString().split("").reverse().join("")
let reversedNumber = parseInt(newNumber) * Math.sign(num);
console.log(reversedNumber);


/*

6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####'
*/
let step = "#";
let space = " ";
function steps(n){
    let steps = "";
    for(let i = 0;i<n;i++){
        if(n>0){
        steps += step;
        console.log("'" + steps + space.repeat(n-i-1) + "'");
        }else{
            console.log("n must be positive number")
        }
    }
    return steps;
}
steps(3);
/*
7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
*/
let newStringA7 = 'Greetings!';
let reverseStringA7 = newStringA7.toString().split("").reverse().join("")
console.log(reverseStringA7)
/*
8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

    let myArray = [1,2,3,4,5,6,7,8];
    let chunk = [];
    let size = 3;
    let smallArray = [];
    for(let i=0;i<myArray.length;i++){
        smallArray.push(myArray[i])
            if(smallArray.length === size){
                chunk.push(smallArray);
                smallArray = []
            }else if(i === myArray.length-1){
                chunk.push(smallArray);
            }
    }
    console.log(chunk)

/*
9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left *and* right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####'

*/
let pyramidstep = "#";
let pyramidspace = " ";
function pyramidsteps(n){
    let steps = "";
    let pyramidsteps = "";
    for(let i = 0;i<n;i++){
        if(n>0){
                steps += step.repeat(2);
                if(i === 0){
                    steps = steps.slice(0,-1);
                }
                console.log("'" + space.repeat((n - (i+1))) + steps + space.repeat((n - (i+1))) + "'");
        }else{
            console.log("n must be positive number")
        }
    }
    return pyramidsteps;
}
pyramidsteps(8);
/*

10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
