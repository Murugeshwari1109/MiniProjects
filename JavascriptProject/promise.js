// // const book=new Promise((resolve,reject)=>{
// //     let isbook=true;
// //     if(isbook)
// //         resolve(1000);
// //     else
// //         reject();
// // })
// // book.then(ok(1000) )
// // .catch(failure)
// // function ok(n){
// //     console.log(`success${n}`);
// // }
// // function failure(){
// //     console.log(`failure`);
// // }

// const reachA=new Promise((resolve, reject)=>{
//     let isreach=true  ;
//     if(isreach)
//         setTimeout(resolve,1000,"MM")
//     else
//         reject("NOT");
// })

const reachB=new Promise((resolve, reject)=>{
    let isreach=false;
    if(isreach)
        setTimeout(resolve,2000,"RM")
    else
        reject("NOTB");
})
// Promise.race([reachA,reachB])
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg))

async function one(){
    return "one"
}
//one().then((msg)=>console.log(msg));

async function two(){
    try{
        console.log(await reachB);
        
        //console.log(res);
        console.log('bye');
    }catch(error){
        console.log(error);
    }
   
}
two()