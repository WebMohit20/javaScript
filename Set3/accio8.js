// n=10;
// count=0;
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         count++;
//     }
    
// }
// if(count==2){
//     console.log(n,"is a prime number");
// }
// else{
//     console.log(n,"is not a prime number");
// }
// let n=11;
// let count=0;
// for(let i=1;i<=n;i++){
//     //count=0
//     for(let j=1;j<=i;j++){
//        if(i%j==0){
//         count++;
//        }
//     }
//     if(count==2){
//         console.log(i)
//     }
//     count=0;
    
    
// }
//let n=5;
//let str=""
//let num;
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=i;j>=1;j--){
//         str=str+j;
//     }
//     console.log(str)    
// }

// let a=25;
// let b=50;
// let lcm=1;
// let hcf=1;
// for(let i=2;i<=10;i++){
//     if(a%i==0||b%i==0){
//         if(a%i==0&&b%i==0){
//             hcf=hcf*i;
//         }
//         lcm=lcm*i;
//         if(a%i==0){
//             a=a/i;
//         }
//         if(b%i==0){
//             b=b/i;
//         }
        
//         i=2;
//     }
// }
// console.log(hcf)
// console.log(lcm)
let n=0;
let m=160;
let DigitCount=0;
let arm=0;
let rem;
for(let i=n;i<=m;i++){
    let n=i;
    for(let j=i;j>0;j=parseInt(j/10)){
        //rem=j%10;
        DigitCount++;
    }
    //console.log(DigitCount);
    for(let k=1;k<=DigitCount;k++){
        rem=n%10;
        n=parseInt(n/10);
        //console.log("last",rem);
        arm+=rem**DigitCount;
        //console.log(arm);
    }
    if(arm==i){
        console.log(i);
    }
    arm=0;
    DigitCount=0;
}