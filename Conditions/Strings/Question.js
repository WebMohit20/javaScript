// let str="123";
// str=str-0;
// let sum=0;
// while(str>0){
//     let last=str%10;
//     sum=sum+last;
//     str=parseInt(str/10);
// }
// for(t of str){
//     sum=sum+ +t;
// }
//  console.log(sum)

//1.
// let str="Hello"
//  let revStr=""
// for(let i=str.length-1;i>=0;i--){
//     revStr=revStr+str[i]
// }
// for(let i=0;i<=str.length-1;i++){
//     revStr=str[i]+revStr;
// }
// console.log(revStr);

//4.
// function CheckUpperLower(str){
//     let strU=str.toUpperCase();
//     if(strU==str){
//         console.log("Uppercase");
//     }
//     else if(str.toLowerCase()==str){
//         console.log("Lowercase");
//     }
// }
// CheckUpperLower("hello");

// let countUpper=0;
// let countLower=0;
// let countSpecial=0;
// let countNumber=0;
// function 

// function Slice(str){
//     let str1="";
//     for(let i=0;i<=str.length-1;i++){
//         str1=str.slice(i,(i+3))
//         if(str1.length<3){
//             break;
//         }
//         console.log(str1)
//     }
    
// }
// Slice("abcd");

// let str="gear five";
// let count=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]==" "){
//         count++;
//     }
// }
// console.log(count+1);

// let str="QUALITY";
// console.log(str.replace("Q","P"));

// function pattern(n){
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let j=1;j<=i;j++){
//             str+="*";
//         }
//         console.log(str);
//     }
// }
// pattern(5)
// let star="*****";
// for(let i=1;i<=5;i++){
//     console.log(star.slice(0,i));
// }
// let n=5;
// let str="";
// for(let i=1;i<=n;i++){
//     str+="*";
//     console.log(str)
// }


//7.
// function duplicateRemover(str){
//     let str1="";
//     for(let i of str){
//         // if(str1.includes(i)==false){
//         //     str1=str1+i;
//         // }
//         if(str1.indexOf(i)==-1){
//             str1=str1+i;
//         }
//     }
//     console.log(str1)
// }
// duplicateRemover("programming");


//8.

// let pswrd="P@ssw0rd";
// let UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let lowerCase= UpperCase.toLowerCase();
// let number="0123456789";
// let special="-!@#$%^&*()_+"
// let U=L=N=S=0;
// if(pswrd.length<8){
//     console.log("Weak Password");
// }
//  for(let i of pswrd){
//      if(UpperCase.includes(i)){
//         U++;
//      }
//      else if(lowerCase.includes(i)){
//         L++;
//      }
//      else if(number.includes(i)){
//         N++;
//      }
//      else{
//         S++;
//      }
// }
// if(U>=1&&L>=1&&N>=1&&S>=1){
//     console.log("Strong Password");
// }
// else{
//     console.log("Weak Password");
// }


// 9.
function splitSentence(sentence){
    let word="";
    for(t of sentence){
        if(t!=" "){
            word+=t;
        }
        else if(t==" "){
            console.log(word);
            word="";
        }
    }
}
let space=" "
splitSentence("Ram is dancing on the floor"+space)



// function NoSpace(sentence){
//     let word="";
//     for(let i of sentence){
//         if(i!=" "){
//             word+=i;
//         }
//         else if(i==" "&&word!=""){
//             console.log(word);
//             //if(){}
//             word="";
//         }
        
//     }
// }
// let space=" "
//NoSpace("    Ram   is    dancing"+space)




// function backward(sentence){
// let word="";
// let str=""
// for(t of sentence){
//     if(t!=" "){
//         word=t+word;
//     }
//     else if(t==" "){
//         str+=word+" ";
//         word="";
//     }
// }
// console.log(str);
// }
// let space=" "
// backward("Ram is dancing on the floor"+space)


