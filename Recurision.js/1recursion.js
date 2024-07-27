function display(n){
    if(n==0){
        return 0;
    }
    console.log(n)
    display(n-1)
}
display(5)