// let user ={
//     name:"murugeshari",
//     gmail:"murugeshwarimurugan119@gmail.com",
//     password:"12324"
// }
// for(let key in user){
//      console.log(user[key]);
// }
// let arr=[1,2,3,4,5];
// console.log(`Normal Function`);
// let p =sum(arr);
// function sum(arr){
//     let s=0;
//     for(let i=0;i<arr.length;i++){
//         s=s+arr[i];
//     }
//     return s;
// }
// console.log(p);

// console.log(`Expression Function`);
// let s = function(arr){
//     let t=0;
//     for(let i=0;i<arr.length;i++){
//         t=t+arr[i];
//     }
//     return t;
// }
// console.log(s(arr));

// console.log(`Arrow Function`);
// let S= (arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// console.log(S(arr));

// console.log(`callback Example`);
// function greetConsole(name){
//     console.log(`Hello ${name}`);
//     const head=document.querySelector('h2');
//     head.innerHTML=`Hello ${name}`; 
// }
// function greetHeading(name){
//     const head=document.querySelector('h2');
//     head.innerHTML=`Welcome ${name}`; 
// }
// function greet(c){
//     c('Ram');
// }

// greet(greetHeading);
// console.log(`forEach Example using Arrow Function`);

// array=[1,2,3,4,5,6];
// arr.forEach(val=>console.log(val));

// console.log(`forEach Example using Normal Function`);

// arr.forEach(print)
// function print(val){
//     console.log(val);
// }
// console.log(`forEach Example using Expression`);

// let show=function(val){
//     console.log(val);
// }
// arr.forEach(show); 

// console.log(`Uppercase an array using forEach` );

// array=['one','two','three','four'];
// array.forEach((val,index,array)=>{
//     array[index]=val.toUpperCase();
// })
// console.log(array);

// console.log(`USD to INR using map` );

// let price=[10,20,30];
// let priceINR=price.map(i=>i*83);
// console.log(priceINR);

// console.log(`USD to INR using forEach` );
// let pr = [10, 20, 30];
// let INR = [];

// pr.forEach((i) => {
//   INR.push(i * 83);
// });

// console.log(INR);


// console.log(`take age from an array object using map`);
// const obj_arr=[{RegNO:2115034, Age:20},{RegNo:2115038,Age:21}];
// const obj_arr2=obj_arr.map(v=>v.Age);
// console.log(obj_arr2);

// console.log(`Return numebrs less than 100 using filter`);
// const a=[100,90,20,40,56,78,300];
// const b=a.filter(k=>k<100);
// console.log(b);
     
// console.log(`2D array to 1D array`);
// let mat=[[1,2,3],[4,3,2],[1,6,4]];
// let mat1=mat.flat();
// console.log(`1D array ${mat1}`);

// console.log(`count of element in an array using reduce`);
// let count=mat1.reduce((acc,currVal)=>{
//      if(acc[currVal])
//         acc[currVal]++;
//      else
//         acc[currVal]=1;
//      return acc;
     
// },{});
// console.log(count);

// console.log(`Exercise using map,reduce and filter`);
// console.log(`Remove duplicates`);  

// let a1=[1,2,3,4,6,6,7,3,9,1];

// let a2=a1.reduce((accum,cur)=>{
//     if(accum[cur])
//         accum[cur]++;
//     else
//         accum[cur]=1;
//     return accum;
    
// },{});

console.log(`closure`);
function one(a,b){
    const v=a+b;
    function two(c){
        console.log(v+c);
    }
    return two;
}
let ans=one(2,3);
ans(10); 