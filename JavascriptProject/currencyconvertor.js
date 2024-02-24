let sel=document.querySelectorAll('.currency')
fetch('//api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>display(res))
function display(res){
    let con=Object.entries(res)
    for(let i=0;i<con.length;i++){
        let curr=con[i][0];
        let option=`<option value=${curr}>${curr}</option>`
        sel[0].innerHTML+=option;
        sel[1].innerHTML+=option;
        
    }
}
let button=document.getElementById('btn');
let inputText=document.getElementById('input');
inputText.addEventListener('input',()=>{
    let cur1=sel[0].value;
    let cur2=sel[1].value;
    let num=input.value;
    if(cur1==cur2)
        alert('Choose diff currency')
    else if(num){
        convert(cur1,cur2,num);
    } else {
        document.getElementById('result').value = '';
    }

});
function convert(cur1,cur2,num) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${num}&from=${cur1}&to=${cur2}`)
   .then(resp => resp.json())
   .then((data) => {
    let result=Object.entries(data.rates)[0][1];
    document.getElementById('result').value=result;
  }); 
}
