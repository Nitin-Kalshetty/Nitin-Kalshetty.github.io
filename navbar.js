let menu = document.querySelector(".menu");
let play=0;
let count=0;
let navData= document.querySelector("#navbar>ul")
navData.style.display="none";
let menu_img=document.querySelector(".menu");
menu.addEventListener("click",function(){
    console.log(count)
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
window.addEventListener('resize',function(){
    if(this.window.innerWidth<=600 && play==0){
        navData.style.display="none";
        count++;
        play++;
        menu_img.src="white_menu.png";
    }else if(this.window.innerWidth>600 && count%2!=0){
        play=0;
    }
})

let name = document.querySelector(".name");
let designation_q = document.querySelector(".designation_query");
let designation= document.querySelector(".designation");
let resume= document.querySelector(".resume");
let id;
let nameData = "Nitin Kalshetty";
let i=0;
let str="";
    setTimeout(() => {
        id = setInterval(function(){
            str+=nameData[i++];
            name.innerHTML = str;
            if(i==nameData.length){
                closeId();
                queryDesignation();
            }
        },200)
    }, 1000);

function closeId(){
    clearInterval(id);
}

function queryDesignation(){
    nameData="Hello, I'm a";
    i=0;
    str=""
    id = setInterval(function(){
        str+=nameData[i++];
        designation_q.innerHTML = str;
        if(i==nameData.length){
            closeId();
            DesignationJava()
        }
    },200)
}
function DesignationJava(){
    nameData="Java Backend Developer.";
    i=0;
    str=""
    id = setInterval(function(){
        str+=nameData[i++];
        designation.innerHTML = str;
        if(i==nameData.length){
            closeId();
            resumeWork()
        }
    },200)
}
function resumeWork(){
    nameData="Resume";
    i=0;
    str=""
    id = setInterval(function(){
        str+=nameData[i++];
        resume.innerHTML = str;
        if(i==nameData.length){
            closeId();
            resume.setAttribute("id","resumeID")
        }
    },200)
}

function closeId(){
    clearInterval(id);
};