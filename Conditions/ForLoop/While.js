// let n=8767654;
// //let i=1;
// let num,digits;
// while(i<=n){
//     num=n%10;
//     console.log(num);
//     digits=Math.floor(n/10);
//     n=digits;
// }
// for(let i=1;i<=n;i++){
//     num=n%10;
//     digits=Math.floor(n/10);
//     n=digits;
//     console.log(num);
// }

// let num,digits,reverse=0;
// let n=879654;
// while(n>0){
//     num=n%10;
//     reverse=reverse*10+num;
//     n=Math.floor(n/10);
// }
// console.log(reverse)
let n=10101000;
let num;
let count=0;
for(let i=1;i<=n;i++){
    num=n%10;
    if(num==0){
        count++;
    }
    if(num>0){
        break
    }
    n=parseInt(n/10);
}
console.log(count)

