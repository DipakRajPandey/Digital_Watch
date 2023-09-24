
let h=document.getElementById("hh");
 let m = document.getElementById('mm');
 let s  = document.getElementById ('ss') ;
 let am=document.getElementById("ampm");

 function date(){
    let x= new Date();
 h.innerText=x.getHours();
 m.innerText=x.getMinutes();
 s.innerText=x.getSeconds();
 let ampm="AM";
 if(x.getHours()>12){
     ampm="PM";
 }
 am.innerText=ampm;
 setTimeout(()=>{
    date()
},1000)
}
date()