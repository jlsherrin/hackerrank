'use strict';

// let inputString = `-1 -1 0 -9 -2 -2
// -2 -1 -6 -8 -2 -5
// -1 -1 -1 -2 -3 -4
// -1 -9 -2 -4 -4 -5
// -7 -3 -3 -2 -9 -9
// -1 -3 -1 -2 -4 -5`

// function readLine() {
//     return inputString[currentLine++];
// }

// inputString = inputString.replace(/\s*$/, '').split('\n').map(str => str.replace(/\s*$/, ''))
// let arr = []
// let currentLine = 0
// for (let i = 0; i < 6; i++) {
//     arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
// }

// console.log(arr)
// let arr = [[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]]
let d = 4
let a = [1, 2, 3, 4, 5]
let rotate = (a,d) => {
    let temp = a.slice(0);
    for (let i=0; i<d; i++) {
        let first = temp.shift();
        temp.push(first);
    }
    return temp;
}


console.log(rotate(a, d))