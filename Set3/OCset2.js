// let n=111;
// let reverse=0;
// for(let i=n;i>0;i=parseInt(i/10)){
//     let last=i%10;
//     reverse=reverse*10+last;
// }
// if(reverse==n){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }
//let n=1234;
// let pow=0;
// let reverse=0;
// for(let i=n;i>0;i=parseInt(i/10)){
//     let last=i%10;
//     reverse=reverse*10+last
//     pow++
    
// }
// let arm=0;
// for(let j=reverse;j>0;j=parseInt(j/10)){
//     let last=j%10;
//     arm=arm+(last**pow)
// }
// if(n==arm){
//     console.log("YES")
// }
// else{
//     console.log("NO")
// }
// let n=3;
//     let sum=0;
//     for(let i=1;i<=n;i++){
//       for(let j=2;j<=i;j=j+2){
//         sum=sum+j;
//         console.log(sum)
//       }
//     }
//     console.log(sum)
// let m=11;
// let n=160;
// let count=0;
// let last;
// for(let i=m;i<=n;i++){
//     for(let j=i;j>=0;j=parseInt(j/10)){
//         last=j%10;
//         count++
        
//     }
//     console.log(count)
// }
// let n=3;
// let fact=1;
// let sum=0;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         fact=fact*j;
//     }
//     sum=sum+fact;
    
//     fact=1;
// }
// console.log(sum);
// let n=145
// let rem;
//     let fact=1;;
//     let sum=0;
//     let orignal=n;
    
//     while(n>0){
//       rem=n%10;
//       let j=1;
//       while(j<=rem){
//         fact=fact*j;
//         console.log(fact)
//         j++;
//       }
//       sum=sum+fact;
//       fact=1;
//       n=parseInt(n/10);
      
//     }
//     if(sum==orignal){
//       console.log("Yes");
//     }
//     else{
//       console.log("No");
//     }

// let flag=0;
// let rev=0;
// let n=12202;
// let zeroCount=0;
// for(let i=n;i>0;i=parseInt(i/10)){
//     let rem=i%10;
//     if(rem%2==0){
//        flag=1;
//        rev=rev*10+rem;
       
       
//     }
//     if(rem==0){
//         zeroCount++;
//        }
//        else{
//         break;
//        }
//   }
  
  //console.log("reverse",rev)
  // if(flag==0){
  //   console.log("-1")
  // }
  // for(let i=rev;i>0;i=parseInt(i/10)){
  //   let rem=i%10;
  //   console.log(rem)
  // }
  
  //   for(let j=1;j<=zeroCount;j++){
  //       console.log("0");
        
  //   }   
let n=160;
let sum=0;
let step=0;
while(n>=9){
  step++;
  while(n>0){
    let last=n%10;
    sum=sum+last;
    n=parseInt(n/10);
  }
 console.log("sum",sum)
  n=sum;
  sum=0;
}
console.log(step);