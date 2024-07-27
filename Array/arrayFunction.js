//push and pop.

// let arr=[10,20,30,40,50];
// arr.push(60,70)
// console.log(arr)
// let arr=[10,20,30,40,50,60];
// let arr1=[]
// for(let i=0;i<arr.length;i++){
//     arr1[i]=arr[i]
//     if(i==3){
//         arr1[i]=arr[i]
//         break;
//     }
// }
// // console.log(arr1
// arr1.pop()
// for(let i=4;i<arr.length;i++){
//     arr1[i-1]=arr[i]
// }
// console.log(arr1)

// let arr=[10,20,30,40,50,60,70];
// let arr1=[]
// // let j=0
// for(let i=0;i<arr.length;i++){
//     arr1.push(arr[i] )
//     if(arr[i]==40){
//         arr1.push(45);
//     }
// }
// console.log(arr1)


let arr=[10,20,30,40,50,60,70];
let x=0;
for(let i=3;i<arr.length;i++){
    arr[i]=arr[i+1]
}
arr.pop();
console.log(arr)

// let arr=[3,2,1,6,0]
// arr.pop(2)
// console.log(arr)




//shift and unshift.

