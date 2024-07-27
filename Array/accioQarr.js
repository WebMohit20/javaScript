// let arr=["ab","abc","cacb","abdf","edfc"]
// let str="abc"
// let count=0
// for(let i =0;i<arr.length;i++){
//     for(let char of arr[i]){
//         if(str.includes(char)){
//             count++
//             console.log(arr[i])
//         }
//     }
    
// }
// console.log(count)


// let a='a'
// let str="abbaabb"
// for(let i=0;i< str.length;i++){
// if(str[i].includes("a")){
//     console.log("YES")
// }
// else if(str[i]=="b"&&str[i+1]=="b"&&str[i+2]=="a"){
//     console.log("YES")
//     i++
// }
// else{
//     console.log("NO")
//     break;
// }
// }

// let row1="qwertyuiop";
// let row2="asdfghjkl";
// let str="glad"
// let s=""
// for(let i of str){
//     if(row1.includes(i)){
//         s+=i;
//         // console.log()
//     }
//     else if(row2.includes())
//     else{
//         s=""
//         break;
//     }
// }
// console.log(s)


let s="Hello World"
let arr=s.split(" ")
let len=0
for(let str=0;str<arr.length;str++){
    if(arr.length-1==str){
        len=arr[str].length
    }
}
console.log(len)

