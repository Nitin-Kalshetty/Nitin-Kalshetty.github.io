let name_js = document.querySelector(".about_name");
let name_context_js = document.querySelector(".about_name_context");
let summary_js=document.querySelector(".about_summary");
let name1 = "I am Nitin Kalshetty and I'm ";
let name_context=["Problem Solver.","Coder.",
"Creative.",]
let stack=[]
let summary="A result-oriented and self-motivated graduate, looking for a challenging career where I can implement my coding knowledge so that further enhance my skills. Strong knowledge of HTML, CSS, Java, JavaScript. Constant learner and ability to adapt to new technologies."
let id2;
let ij=0;
let str2="";
    setTimeout(() => {
        id2 = setInterval(function(){
            str2+=name1[ij++];
            name_js.innerHTML = str2;
            if(ij==name1.length){
                closeId1();
                functionNameContext();
                functionSummary()
            }
        },200)
    }, 1000);

let id1;
let ind=0;
let str1=""
function functionNameContext(){
        let valIndex=0;
        let val=name_context[valIndex]
        ind=0;
        str1=""
        setTimeout(() =>{
           id1=setInterval(function(){
            let val=name_context[valIndex]
            if(val==undefined){
                valIndex=0;
                ind=0
                str1="P"
            }
            str1+=val[ind++]
            name_context_js.innerHTML=str1;
            if(ind==val.length){
                valIndex++
                ind=0
                str1=""
            }
           },200)
        },500)

}


function functionSummary(){
    ij=0;
    str3=""
    setTimeout(() => {
        id2 = setInterval(function(){
            str3+=summary[ij++];
            summary_js.innerHTML = str3;
            if(ij==summary.length){
                closeId1();
            }
        },100)
    }, 500);

}
function closeId1(){
    clearInterval(id2);
}
