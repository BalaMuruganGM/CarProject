


let a=1;
document.querySelector('.navBars').addEventListener("click", () => {
    
    if(a==1){
    document.querySelector('.navbutton').style.left = "0";
    a=0;
    }
    else{
        document.querySelector('.navbutton').style.left = "-100%";
        a=1;        
    }
});




document.querySelector('.navXmark').addEventListener("click", () => {
    document.querySelector('.navbutton').style.left = "-100%";
});
