const _ = require('lodash');

// const inputNumbers = [4, 3, 1, 10,  50, 100];
const inputNumbers = [1, 2, 3, 4];
// const inputNumbers = '1234';

function combinations(active, rest, a) {
    console.log(active, rest, a);
    if ((!active || active.length === 0) && (!rest || rest.length === 0))
        return;
    if (!rest || rest.length === 0) {
        a.push(active);
    } else {
        console.log(typeof active, rest[0]);
        combinations(active.push(rest[0]), rest.slice(1), a);
        combinations(active, rest.slice(1), a);
    }
    return a;
}

const output = combinations([], inputNumbers, []);
console.log(output);
console.log(output.length);



// // let innerResult = [];
// inputNumbers.forEach((input) => {
//     let list = [input];
//     inputNumbers.forEach((innerInput) => {
//        if (input === innerInput) {
//            return;
//        }
//
//        list.push(innerInput);
//     });
//     output.push(list);
// });
// // output.push(innerResult);
//
//
// console.log(output);
// console.log(output.length);






// function inner(i, val, listOfArrays, res) {
//     let iter = i, current = val;
//     return function(x) {
//         let next = current + x;
//         if(iter === listOfArrays.length - 1) {
//             res.push(next);
//         } else {
//             listOfArrays[i+1].map(inner(i + 1, next, listOfArrays, res));
//         }
//     }
// }
//
// function allCombinations(listOfArrays) {
//     let res = [];
//     listOfArrays[0].map(inner(0, '', listOfArrays, res));
//     return res;
// }
//
// const result = allCombinations([
//     [1, 4, 7]
// ]);
// console.log(result);






// _.times(6, (digit) => {
//     let digitString = '';
//     _.times(25, (n) => {
//         const number = n + 1;
//         digitString += number + ' ';
//     });
//     console.log(digitString);
// });

// let result = '';
// inputNumbers.forEach((n) => {
//     result += n + '+';
// });
// console.log(result + ' = ' + _.sum(inputNumbers));

