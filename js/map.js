//1 - map will work for arrays
//2 - It takes a callback function as a parameter
//3 - each and every Element will be passed in first callback parameter, second callback paramter is index
//4 - It will iterate this callback function again and again for each element withn the array
//5 - map returns a new array
//6 - callback function must return something and that returned value will be pushed on to new Array

let array1 = [2, 3, 6, 8, 9];


//[4,6,12,16,18 ]
// let x = array1.map((item, index) => {
//     return item * 2
// });

let x1 = array1.map((item, index) => {
    return { index: item }
});

console.log(x)

