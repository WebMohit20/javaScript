// let str="";
// for(let i=1;i<=5;i++){
//     str+=i+" ";
// }
// console.log(str)
// for(let outer=1;outer<=2; outer++){
//     for(let inner=outer;inner>=1;inner--){
//         console.log(inner)
//     }
//     console.log()
// }
// for(let i=1;i<=5;i++){
//     let str=""
//     for(let j=1;j<=i;j++){
//         str=str+i;
        
//     }
//     console.log(str)

// }
// let count=1;
// for(let i=1;i<=5;i++){
//     let str=""
//     for(let j=1;j<=i;j++){
//         str=str+count;
//         count++;
        
//     }
//     console.log(str)

// }
// num=1
// for(let i=1;i<=5;i++){
//     let str=""
    
//     for(let j=1;j<=i;j++){
//         str+=num
//         num++
//         if(num==4){
//             num=1
//         }
//     }
//     console.log(str)
    
// }
// for(let i=1;i<=5;i++){
//     let str1=""
//     let str2=""
//     for(let j=i;j<=5-1;j++){
//         str1+=" "
        
//     }
//     for(let j=1;j<=i;j++){
//         str2+=j
//     }
//     console.log(str1+str2)
   
// }
let n=4;
for(let i=1;i<=n;i++){
    let str1="";
    let str2="";
    for(let j=i;j<=n-1;j++){
        str1=str1+" ";
    }
    for(let j=1;j<=2*i-1;j++){
        str1+="*"
    }
    console.log(str1);
}