let color=document.getElementById('color');
let button=document.getElementById('btn');
let wrap=document.getElementById('wrap');
let value=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


button.addEventListener('click',change)
function change() {
    let res='#';
    for(let i=0;i<6;i++){
        res=res+random();
    }
   
    wrap.style.backgroundColor=res;
    color.innerHTML=res;
}

function random(){
    let index=Math.floor(Math.random()*16);
    return value[index];
}