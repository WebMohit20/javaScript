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

// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     let num=i;
//     for(let j=1;j<=i;j++){
//         str=str+num;
//         num++
//     }
//     console.log(str);
// }

//Binary to decimal;
let n=10100110010011001;
let sum=0;
let x=0;
while(n>0){
    let last=n%10;
    sum=sum+last*(2**x);
    n=parseInt(n/10);
    x++
}
console.log(sum)