let but=document.getElementById('add');
let todo=document.getElementById('todoList');
let input=document.getElementById('input');

let arr=[]
but.addEventListener('click',()=>{
    arr.push(input.value);
    addTOlist(input.value);
    input.value='';
})
function addTOlist(val){
    let p=document.createElement('p');
    p.innerText=val;
    todo.appendChild(p);
    p.addEventListener('click', ()=>{
        p.style.textDecoration='line-through';
        remove(val);
    })
    p.addEventListener('dblclick', ()=>{
        todo.removeChild(p);
        remove(val);
    })
}
function remove(val){
    let index=arr.indexOf(val);
    if(index>-1){
        arr.splice(index,1);
    }
}