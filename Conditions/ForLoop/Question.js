// let count=0;
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//        count++; 
//     }
// }
// console.log(count);
    
// let sum=0;
// for(let i=1;i<=100;i++){
//     sum+=i;
// }
// console.log(sum)
//1.
// let n=5;
// let fact=1;
// for(let i=1;i<=n;i++){
//     fact*=i;
// }
// console.log(fact);
//2.
// let n=10;
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         console.log(i)
//     }
// }
//3.
// let n=15;
// let count=0;
// for(let i=2;i<=n;i++){
//     if(n%i==0){
//        count++;
//     }
// }
// if(count==1){
//     console.log("Prime")
// }
// else{
//     console.log("Not Prime")
// }
// //4.
// let a=20;
// let b=32;
// let mul=1;
// let flag=false;
// for(let i=a;i<=b;i++){
//     let last2Digit=i%100
//     console.log(last2Digit)
//     let secondlastDigit=Math.floor(last2Digit/10)
//     if(secondlastDigit==4){
//         if(i%2==0){
//           mul*=i; 
//           flag=true; 
//         }
//     }
// }
// if(flag==true){
//     console.log(mul)
// }
// else{
//     console.log("0")
// }



// let n=5;
// let half=parseInt(n/2)
// for(let i=1;i<=half+1;i++){
//     let str=""

//     for(let j=i;j<=half+1;j++){
//         str+="*"
//     }
//     for(let j=1;j<2*i-3;j++){
//         str+=" "
//     }
//     for(let j=i;j<=half+1;j++){
//         str+="*"
//     }
//     console.log(str)
// }
// for(let i=half;i>=1;i--){
//     let str=""
//     for(let j=i;j<=half+1;j++){
//         str+="*"
//     }
//     for(let j=1;j<2*i-3;j++){
//         str+=" "
//     }
//     for(let j=i;j<=half+1;j++){
//         str+="*"
//     }
//     console.log(str)
// }


// let n=20000;
// let x=1
//     for(let i=1;i<=2*n-1;i++){
//         let str=""
        
//         for(let j=1;j<=x;j++){
//             str+=j+" "
//         }
//         for(let j=x-1;j>=1;j--){
//             str+=j+" "
//         }
        
//         if(i>=n){
//             x=x-1
//             // break;
//         }
//         else{
//             x=x+1
//         }
//         console.log(str)
        
//     }




