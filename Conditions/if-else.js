//1.
// a=10
// b=20
// if(a<b)
//     console.log("B is bigger")
// else
//     console.log("A is bigger")
//2.
// a=20
// b=10
// c=30
// if(a>b && a>c)
//     console.log("A is bigger")
// else if(b>c&&b>a)
//     console.log("B is bigger")
// else   
//     console.log("C is bigger")
//3.
// let a=12
// if(a%3==0&&a%5==0)
//     console.log("YES")
// else
//     console.log("NO")
//4.
// let a=10.5
// b=parseInt(a)
// if(a==b)
//     console.log("It is not a decimal number")
// else if(a!=b)
//     console.log("It is a decimal number")
//5.
// let a=252
// b=((a%10)*100)
// c=Math.floor(a/10)
// d=b+((c%10)*10)+Math.floor(a/100)
// if(a==d)
//     console.log("YES")
// else
//     console.log("NO")
//6.
// a=11
//if(a%15==0)
//  console.log("Hello Wrold")
// else if(a%3==0)
//     console.log("Hello")
// else if(a%5==0)
//     console.log("World")
// else if(a%3!=0 && a%5!=0)
//     console.log("NO")
//7.
// a=2
// b=2
// c=a+b
// if(c%2==0)
//     console.log("EVEN")
// else
//     console.log("ODD")
// c=a*b
// if(c%2==0)
//     console.log("Even")
// else
//     console.log("ODD")
//8.
// a=931
// if(a%2==0){
//     console.log("EVEN")
//     b=(a%10)
//     c=Math.floor(a/10)
//     d=(b+(c%10))+Math.floor(c/10)
//     if(d%5==0)
//         console.log("Divisible by 5.")
//     else 
//         console.log("Not Divisible by 5.")
// }
// else{
//     console.log("ODD")
//     b=(a%10)
//     c=Math.floor(a/10)
//     d=(b*(c%10))*Math.floor(c/10)
//     if(d%9==0)
//         console.log("Divisible by 9.")
//     else 
//         console.log("Not Divisible by 9.")
// }
//9.
// let a,b,c;
// a=110;
// b=20;
// c=130;
// if(a>b&&a>c){
//     if(b>c){
//         SLargest=b;
//     }
//     else{
//         SLargest=c;
//     }
// }
// else if(b>a&&b>c){
//     if(a>c){
//         SLargest=a;
//     }
//     else{
//         SLargest=c;
//     }
// }
// else{
//     if(a>b){
//         SLargest=a;
//     }
//     else{
//         SLargest=b;
//     }
// }
// console.log(SLargest);
//12.
// let unit=150;
// let next,rs,surcharge;
// let rs3=rs2=rs1=0;;
// if(unit>250){
//      rs=unit*4;
//      //console.log(rs);
// }
// else if(unit<=250){
//     if(unit>150){
//         next=unit-150;
//         rs3=next*3;
//         unit-=next;
//     }
//     if(unit>50){
//         next=unit-50;
//         rs2=next*2;
//         unit-=next;
//     }
//     if(unit<=50){
//         rs1=unit*1;
//     }
//     rs=rs1+rs2+rs3;
// }
// if(rs>150){
//     rs=0.20*rs+rs;
//     console.log(rs);
// }
// else{
//     console.log(rs)
// }
let a=20;
let b=16;
let hcf=1;
for(let i=2;i<=10;i++){
    if(a%i==0&&b%i==0){
        hcf=i;
        //console.log(hcf)
       
    }
    //i=2
}
console.log(hcf);

    