let menu = document.querySelector(".menu");
let count=0;
let navData= document.querySelector("#navbar>ul")
let menu_img=document.querySelector(".menu");
menu.addEventListener("click",function(){
    if(count%2==0){
        menu_img.src="white_close.png";
        count++;
        navData.style.display="block";
    }else{
        menu_img.src="white_menu.png";
        count++;
        navData.style.display="none";
    }
})

