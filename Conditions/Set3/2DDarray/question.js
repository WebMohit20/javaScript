// let m=[
//     [10,20,30,40],
//     [40,50,60,65],
//     [70,80,90,100]
// ]
// rowSum=0;
// for(let t of m){
//     for(let x of t){
//         rowSum+=x
//     }
//     console.log(rowSum);
//     rowSum=0
// }


// let colSum=0;
// // let x=0;
// for(let i=0;i<m.length;i++){
//     for(let j=0;j<m.length;j++){
//         colSum+=m[j][i]
//     }
  
//    console.log(colSum)
//    colSum=0;
// }

// let leftSum=0
// let x=m[0].length-1
// for(let i=0;i<m.length;i++){
//     leftSum+=m[i][x]
//     x--
// }
// console.log(leftSum)


// let rigthSum=0

// for(let i=0;i<m.length;i++){
//     rigthSum+=m[i][i]
// }
// console.log(rigthSum)



let mat=[
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

let nMat=[]

for(let i=0;i<mat.length;i++){
    nMat[i] =[]
    for(let j=0;j<mat[i].length;j++){
        nMat[i][j]=mat[j][i]
    }
}
console.log(nMat) 