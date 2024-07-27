// function display(n){
//     if(n==0){
//         return 0;
//     }
//     console.log(n)
//     display(n-1)
// }
// display(5)


// function display(n){
//     if(n==0){
//         return 0
//     }
//     display(n-1)
//     console.log(n)
// }

// // let x=
// console.log(display(5))       
// console.log(x)


// function sumRecursion(n){
//     if(n==0){
//         return 0
//     }
//     return n+sumRecursion(n-1)
// }
// console.log(sumRecursion(5))

// function display(n){
//     if(n==0){
//         return 0
//     }
//     display(n-1)
//     console.log(n)
//     display(n-1)
// }
// display(3)

// function fibonacci(n){
//     if(n<=0){
//         return 0;
//     }
//     else if(n==1){
//         return 1;
//     }
//     else{
//         return fibonacci(n-1)+fibonacci(n-2)
//     }
// }

// console.log(fibonacci(5))


function stringLength(str, i = 0) {
    if (str[i] === undefined) {
        return i;
    }
    return stringLength(str, i + 1);
}

// Call the function with an example input
console.log(stringLength("hello"));