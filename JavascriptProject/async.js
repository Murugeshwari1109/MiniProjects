console.log(`welcome`);
function hello(){
    console.log(`Hello`);
}
hello();
setTimeout(() => console.log(`step1`), 5000);
setTimeout(() => console.log(`step2`), 3000);
setTimeout(() => console.log(`step3`), 1000);
setTimeout(() => console.log(`step4`), 4000);
console.log('thank you');
setInterval(()=>console.log(`step5`),1000);
