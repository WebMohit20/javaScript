// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=i;j<=n-1;j++){
//         str=str+" ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//         str=str+"*";
//     }
//     console.log(str);
// }
// for(let i=1;i<=n-1;i++){
//     let str="";
//     for(let j=i;j>=1;j--){
//         str=str+" "
//     }
//     for(let j=i;j<=2*(n-1)-i;j++){
//         str=str+"*"
//     }
//     console.log(str)
// }
let n=5;
for(let i=1;i<=parseInt(n/2)+1;i++){
    let str="";
    for(let j=i;j<=parseInt(n/2);j++){
        str=str+" ";
    }
    for(let j=1;j<=2*i-1;j++){
        str=str+"*";
    }
    console.log(str)
}
for(let i=parseInt(n/2);i>=1;i--){
    let str="";
    for(let j=i;j<=parseInt(n/2);j++){
        str=str+" ";
    }
    for(let j=1;j<=2*i-1;j++){
        str=str+"*";
    }
    console.log(str)
}
