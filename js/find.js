//1 - find will work for arrays
//2 - It takes a callback function as a parameter
//3 - each and every Element will be passed in first callback parameter, second callback paramter is index
//4 - It will iterate this callback function again and again until callback condition matches
//5 - find returns matching element of original array
//6 - callback function must return some condition

let array1 = [
    { name: "a", value: 10 },
    { name: "b", value: 20 },
    { name: "c", value: 30 },
    { name: "d", value: 40 }
];


let x = array1.find((item) => {
    return (item.value === 20)
});


console.log(x)