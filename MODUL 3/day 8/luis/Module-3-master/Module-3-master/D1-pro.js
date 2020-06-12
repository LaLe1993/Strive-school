/*
1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"*/


    function mostRepeatedChar(_string) {
        let chars = String(_string).split("")
        
        let rankings = {}
        let mostRepeated = {
            chars: [chars[0]],
            count: 1
        }

        for (let char of chars) {
            if (rankings[char]) {
                if (++rankings[char] > mostRepeated.count) {
                    mostRepeated.chars = [char]
                    mostRepeated.count = rankings[char]
                } else if (rankings[char] == mostRepeated.count 
                       && mostRepeated.chars.indexOf(char) == -1) {
                    mostRepeated.chars.push(char)
                }
            } else rankings[char] = 1
        }

        return mostRepeated.chars.length == 1 ? mostRepeated.chars[0] : mostRepeated.chars
    }

    // console.log(mostRepeatedChar("abccd"))

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
 
 function checkAnagram(_string1, _string2) {
     let notAllowed = `!"£$%&/()=?^<>,.-;:_@#§*+[]{}\|' `
     let string1 = String(_string1).toLowerCase()
     let string2 = String(_string2).toLowerCase()
     
     for (let char of notAllowed.split("")) {
         string1 = string1.split(char).join('')
         string2 = string2.split(char).join('')
        }
        
        // console.log(string1)
        // console.log(string2)
        return string1.split("").sort().join('') === string2.split("").sort().join('')
    }
    
    // console.log(checkAnagram('RAIL! SAFETY!', 'fairy tales'))
    // console.log(checkAnagram('rail safety', 'fairy tales') )
    // console.log(checkAnagram('Hi there', 'Bye there') )
    
    /*
  
3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

String.prototype.checkAnagramIn = function(list) {
    if (list instanceof Array) {
        let anagrams = []

        for (let element of list) if (checkAnagram(this, element)) {
            anagrams.push(element)
        }
        
        return anagrams
    }
}

// let list = ["enlists", "google", "inlets", "banana"]
// console.log("listen".checkAnagramIn(list))



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
   
function checkPalindrome(string) {
    return string == reverseString(string)
}

// console.log(checkPalindrome("itopinonavevanonipoti"))
    
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
   
   function reverseInt(n) {
       if (Number.isInteger(n)) {
           let rev = parseInt(reverseString(`${Math.abs(n)}`))
           return n < 0 ? `-${rev}` : rev
        }
    }
    
    // console.log(reverseInt(15) )//=== 51
    // console.log(reverseInt(981))//=== 189
    // console.log(reverseInt(500))//=== 5
    // console.log(reverseInt(-15))//=== -51
    // console.log(reverseInt(-90))//=== -9

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

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stepsForRow = ""
        for (let char = 0; char < n; char++) {
            stepsForRow += char <= row ? "#" : " "
        }

        console.log(`'${stepsForRow}'`)
    }
}
 
// steps(2)
// steps(3)
// steps(4)
        
/*

7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
*/

function reverseString(_string) {
    let string = String(_string)
    let revString = ""

    for (let i = string.length - 1; i >= 0; i--) {
        revString += string[i]
    }

    return revString
}

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
   
   function chunk(array, length) {
       let chunked = [[]]
       for (let element of array) {
           if (chunked[chunked.length - 1].length == length) {
               chunked.push([])
            }
            
            chunked[[chunked.length-1]].push(element)
        }
        console.log(chunked)
        return chunked
        
    }
    
    // chunk([1, 2, 3, 4], 2)              //--> [[ 1, 2], [3, 4]]
    // chunk([1, 2, 3, 4, 5], 2)           //--> [[ 1, 2], [3, 4], [5]]
    // chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)  //--> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    // chunk([1, 2, 3, 4, 5], 4)           //--> [[ 1, 2, 3, 4], [5]]
    // chunk([1, 2, 3, 4, 5], 10)          //--> [[ 1, 2, 3, 4, 5]]

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

function nthOdd(n) {
    return 2 * n - 1    
}

function makePyramid(n) {
    if (n <= 1) {
        return ['#']
    } else {
        let pyramid = []

        let auxPyramid = makePyramid(n-1)
        for (let floor of auxPyramid) {
            pyramid.push(` ${floor} `)
        }
        
        let lastFloor = ''
        for (let char = 0; char < nthOdd(n); char++) {
            lastFloor+='#'
        }

        pyramid.push(lastFloor)
        return pyramid
    }
}

function pyramid(n) {
    for (let floor of makePyramid(n)) {
        console.log(`'${floor}'`)
    }
}

// pyramid(30)

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
        [
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10,  9,  8, 7]
        ]

        00 01 02 03 R
        13 23 33    D
        32 31 30    L
        20 10       U
        11 12       R
        22          D 
        21          L
*/
class Direction {
    // direction: [row, column]

    static right = [ 1, 0]
    static down  = [ 0, 1]
    static left  = [-1, 0]
    static up    = [ 0,-1]
    
    static all   = [
        Direction.right,
        Direction.down,
        Direction.left,
        Direction.up
    ]
    
    static current = 0
    
    constructor() {
        Direction.current = 0
    }
    
}

class _Direction {
    static right = [ 1, 0]
    static down  = [ 0, 1]
    static left  = [-1, 0]
    static up    = [ 0,-1]

    constructor() {
        this.current = Direction.right
    }

    change = () => {
        let self = {}
        Object.assign(self, this)

        switch(this.current) {
            case Direction.right: 
                self.current = Direction.down
            case Direction.down: 
                self.current = Direction.left
            case Direction.left: 
                self.current = Direction.up
            case Direction.up: 
                self.current = Direction.right
        }

        this.current = self.current
    }
}

var direction = new Direction()

function changeDirection() {
    if (++Direction.current > 3) Direction.current = 0
}

function spiralMatrix(n) {
    if (Number.isInteger(n)) {
        let matrix = []
        const placeholder = `§`
        
        for (let i = n; i > 0; i--) {
            let row = new Array(n)
            row.fill(placeholder)
            matrix.push(row)
        }
        
        let [nextX, nextY] = [0, 0]
        for (let i = 1;  i <= (n * n); i++) {
            matrix[nextY][nextX] = i

            let [checkX, checkY] = [nextX, nextY]
            
            checkX += Direction.all[Direction.current][0]
            checkY += Direction.all[Direction.current][1]

            if (checkX == n 
            ||  checkY == n 
            ||  matrix[checkY][checkX] != placeholder) {
                changeDirection()
            }

            nextX += Direction.all[Direction.current][0]
            nextY += Direction.all[Direction.current][1]

            if (matrix[nextY][nextX] != placeholder) break
        }

        console.log(matrix)

    }
}


// spiralMatrix(6)

let _direction = new _Direction()
console.log(_direction.current)
_direction.change()
console.log(_direction.current)


