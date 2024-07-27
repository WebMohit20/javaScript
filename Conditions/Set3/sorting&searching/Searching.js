
let arr=["apple","orange","kiwi","banna"];

console.log(arr.sort(fun))
function fun(a,b){
    // return b-a
    if(a>b){
        return -1
    }
    else if(a<b){
        return 1
    }
    else{
        return 0
    }
}