//1 - forEach works for arrays
//2 - It takes a callback function as a parameter
//3 - each and every Element will be passed in first callback parameter, second callback paramter is index
//4 - It will iterate this callback function again and again for each element withn the array
//5 - forEach does not return anything


let arr = [1, 2, 3, 4, 5, 6, 7];

//way1
const fun = (item, index) => {
    console.log(item, index);
}
arr.forEach(fun);

//way 2
arr.forEach((item, index) => {
    console.log(item, index);
});


//Double array using forEach Loop
let array1 = [2, 3, 6, 8, 9];
let result = []
array1.forEach((item) => {
    let x = item * 2;
    result.push(x);
})
console.log(result);






