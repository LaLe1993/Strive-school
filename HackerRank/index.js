// function repeatedString1(s, n) {
//     let numberOfA = 0;
//     let myNumber = 0;
// if(s==='a'){
// return n
// }else{
// if(s.length >= 10){
//     for(let i=0;i<s.length;i++){
//         if(s[i]==='a'){
//             numberOfA++;
//         }
//     }
//     myNumber = n * numberOfA - numberOfA + 1;
//     console.log(myNumber)
//     return myNumber;
// }else{
// let string = s.repeat(10).slice(0,10)
// for(let i=0;i<string.length;i++){
//     if(string[i]==='a'){
//         numberOfA++
//     }
// }
// return(numberOfA);
// }
// }

// }

// repeatedString1('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq',549382313570)

function repeatedString(s, n) {
let numberOfA = 0;
if(s==='a'){
    return n
}
for(let i=0;i<s.length;i++){
    if(s[i]==='a'){
        numberOfA++
    }
}
    let multiply = Math.floor(n/s.length)
    if((n/s.length)!==multiply){
        let rest = ((multiply)*s.length - n)*(-1)
        numberOfA = numberOfA * multiply;
        for(let i=0;i<rest;i++){
            if(s[i]==='a'){
                numberOfA++
            }
        }
    }else{
        numberOfA = numberOfA * multiply;
    }

console.log(numberOfA)
return numberOfA
}

repeatedString('ababa',12)

// let numberOfA = 0
// if(s==='a'){
//     numberOfA = n;
// }else{
//     var numberOfLetters = Math.floor(n/s.length)+1
//     console.log("This is ",numberOfLetters)
//     var string = s.repeat(numberOfLetters).slice(0,n)
//     for(let i=0;i<string.length;i++){
//         if(string[i]==='a'){
//             numberOfA++
//         }
//     }
// }
// console.log(numberOfA);
// return numberOfA;