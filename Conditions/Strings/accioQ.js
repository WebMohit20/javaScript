//let sentence="We promptly judged antique ivory buckles for the next prize ";
// let noSpace="";
// let word="";
// for(let i of sentence){
//     if(i!=" "){
//         word+=i;
//     }
//     else if(i==" "){
//         noSpace+=word;
//         word="";
//     }
// }
//console.log(noSpace);
//console.log(sentence)
// let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let lower=capital.toLowerCase();
// console.log(capital,"\n",lower);

// function isPangram(sentence){
//     let isPanagram=false;
//     let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let lower=capital.toLowerCase();
//     for(let i of lower){
//         if(sentence.includes(i)){
//             isPanagram=true;
//         }
//         else{
//             isPanagram=false;
//             break;
//         }
//     }
//     for(let i of capital){
//         if(sentence.includes(i)){
//             isPanagram=true;
//         }
//         else{
//             isPanagram=false;
//             break;
//         }
//     }

//     return isPanagram;
// }
// console.log(isPangram(sentence));


// let str="AbCdd";
// let code="";
// let changeStr=""
// for(let i=0;i<str.length;i++){
//     code=str.charCodeAt(i);
//     if(code>64&&code<91){
//         changeStr=changeStr+str[i].toLowerCase();
//     }
//     else{
//         changeStr=changeStr+str[i].toUpperCase();
//     }
// }
// console.log(changeStr)

// let s="app_dsd_sdda"
// let str="";
// //let characters=""
// for(let i=0;i<s.length;i++){
    
//     if(s[i]=="_"){
//         str=str+s[i+1].toUpperCase();
//     }
//     else if(s[i-1]!="_"){
//         str=str+s[i]
//     }
// }
// console.log(str)



// let str="abcde";
// let char=str;
// for(let i=0;i<str.length;i++){
//     let str1="";
//     for(let val of char){
//         str1=str1+val;
//         console.log(str1); 
//     }
//     char=char.replace(char[0],"");
// }
// //console.log(char);


// let s="aaabcc"
// let str="";
// let compressed=""
//     let count=0;
//     for(let i=0;i<s.length;i++){
//         str=str+s[i];
//         //console.log(str)
//         for(let j of s){
//             if(s[i]==j){
//                 count++;
//             }
//         }
//         if(count>1){

//             str=str+count.toString();
//             //str=str.replaceAll(count,"")
//             //compressed+=str
//             str=str.replaceAll(s[i+1],"")
//         }
        
//         count=0;
//     }
    
//     console.log(str)


// let str="IAmJava"
// let word="";
// let code="";
// for(let val=0;val<str.length;val++){
//     code=str.charCodeAt(val)
//     if(code>64&&code<91){
//         word=word+str[val];
//         for(let i=1;i<str.length-word.length;i++){
//             code=str.charCodeAt(val+1);
//             if(code>96&&code<123){
//                 word=word+str[val+1]
//                 //console.log(word)
//                 //word=""
//             }
//             // else{
//             //     //console.log(word)
//             //     word=""
//             // }
//         }
//     }
//     console.log(word)
//     word=""
// }


// let str="hey"
// let e=""
// let s=""
// for(let i=1;i<=1+1;i++){
//     e+="e"
// }
// s+=str[0]+e+str[str.length-1]
// console.log(s)


// let num="1321,3213,424,124";

// let arr=num.split(",")
// console.log(arr)

