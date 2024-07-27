// const readline=require("readline");
// const code=readline.createInterface({
//     input:process.stdin
// });
// const userInput=[];
// code.on("line",(data)=>
// {
//     userInput.push(data);
// });
// code.on("close",()=>{
//     let input=userInput
//     console.log("Enter digit");

//     let n=+input[0];
//     let a=n;

// let reverse=0;
// for(let i=a;i>0;i=parseInt(i/10)){
//     let last=i%10
//     reverse=reverse*10+last    
// }

// for(let j=reverse;j>0;j=parseInt(j/10)){
//     let last=j%10
//     if(last%2==0){
//         console.log(last)
//     }
// }
// });
// let b=25;
// let a=50;
// let hcf=1;
// for(let i=2;i<=10;i++){
//     if(a%i==0&&b%i==0){
//         a=a/i;
//         b=b/i;
//         hcf=hcf*i;
//         i=2;
//     }
// }
// console.log(hcf)
// let n=1213;
// let num=0;
// for(let i=n;i>0;i=parseInt(i/10)){
//     let reverse=i%10;
//     num=num*10+reverse;
// }
// console.log(num)
const readline=require("readline");
const code=readline.createInterface({
    input:process.stdin
});
const userInput=[];
code.on("line",(data)=>
{
    userInput.push(data);
});
code.on("close",()=>{
    let input=userInput
    //console.log("Enter digit");
    let n=+input[0];
    let temp=n;
    let flag=0;
    while(temp>0){
      let rem=temp%10;
      if(rem%2==0){
        flag=1;
        console.log(rem)
      }
      temp=Math.floor(temp/10);
    }
      if(flag==0){
        console.log("-1")
      
      }
});


