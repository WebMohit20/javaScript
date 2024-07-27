// function sumof2Number(a,b){
//     // let a=10;
//     // let b=20;
//     let sum=a+b;
//     console.log(sum);
// }
// sumof2Number(10,20);
// sumof2Number(100,300);
// function Digits1(n,expo){
//     let rem;
//     let sum=0;
//     while(n>0){
//         rem=n%10;
//         sum=sum+rem**expo;
//         n=parseInt(n/10);
//     }
//     console.log(sum)
// }
// Digits1(456,1);
// Digits1(759,2);
// Digits1(123,3);
function productOfDigits(n){
    let mul=1;
    let rem;
    
    let orignal=n;
    while(orignal>0){
        rem=orignal%10;
        mul=mul*rem;
        orignal=parseInt(orignal/10);
    }
    return mul;

}
let x=78934;
let a=productOfDigits(x)
let b=productOfDigits(a+x)
console.log(b)