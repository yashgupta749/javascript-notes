//sync programming me ek sequence me sare program me chlti hai

// const { reject } = require("async");

//                   async example 

// console.log("one");
// console.log("two");
// setTimeout(()=>{
//   console.log("hello");
// },4000);//first function hai or second ham time de rahe ahi jo ki milisec me hai ..
// console.log("three");
// //simple jo hamne timeout lgaya hai wo 4 sec bad execute hoga or uske bad ke code us function ke liye wait nhi krega wo print ho jaenge 

//callback kisi ek fucntiion ko dusre function me call krna as a argument ki trh use callbacks bolte hai 

//       callbacks
// function getdata(dataid){
//   setTimeout(()=>{
//     console.log("data",dataid);
//   },4000);
// }
// getdata(1);
// getdata(2);
// getdata(3);// simple dekho teeno ek sath run krenge or teeno ki 4sec ka delay hoga jisse wo teeno ka delay sath me khtm ho jaega or wo sath me run krenge 

//simple hame ek run ho or 4 sec ka delay ho or fri 2nd run ho fir 4sec ka delay ese ona chahiye

   // callbacks hell

// function getdata(dataid,nextdata){
//   setTimeout(()=>{
//     console.log("data",dataid);
//     nextdata();
//   },1000);
// }

// //getdata(1,getdata(2)); ye error de deta 
// getdata(1,()=>{
//   console.log("getting data2");
//   getdata(2,()=>{
//     console.log("getting data3");
//     getdata(3,()=>{
//       console.log("all data is complete")
//     });
//   });
// });
// ye thoda complex ho jata hai isko resolve krne ke liye promises use krte hai 

//               promises

// promise basically three states 
// 1=pending
// 2 resolve
// 3 rejected    it is function with the 2 or 3 handlers 


// let promise= new Promise((resolve,reject)=>{
//   console.log("i am promise");
//   reject('some error');//generate error
//   resolve('success');
// })

// function getdata(dataid,nextdata){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data",dataid);
//       resolve("success");
//       if(nextdata){
//         nextdata();
//       }
//     },1000);
//   })
// }


// promise .then(),.catch()

// simple agar promise fulfill hota hai to uske bad ka hame kuch krwana hai to wo ham 
// promise.then((res)=>{}) iske through kr lete hai
// or agar resolve nhi hoti hai then ham 
// promise.catch((err)=>{}) use krte hai 

// const getpromise=()=>{
//   let promise= new Promise((resolve,reject)=>{
//     console.log("i am promise");
//     reject('some error');// in dono me se koi ek hi le skte hai ek time pr 
//     resolve('success');
//   })

//   let promisee=getpromise();
//   promisee.then((result) => {
//     console.log("promisefulfilled",result);
//   }).catch((err) => {
//     console.log("error generated",err);
//   });
// }




//        promise chain



//            async await 
// simple async jo hai wo function ki trh work krta hai or always promises return krega 
// await ka roll hai ki wo us function ko work krega or jb tk wo fulfilled nhi ho jaega next ya aage ka code run nhi hoga 


// function api(){
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(300);
//     }, 2000);
//   });
// }

// async function getweatherdata(){
//   await api();// phle ye complete hogi
//   await api(); //then ispr aaenge 
// }


// function getdata(dataid){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data",dataid);
//       resolve("success");
//     },1000);
//   })
// }

// async function getalldata(){
//   console.log("getting data 1");
//   await getdata(1);
//   console.log("getting data 2");
//   await getdata(2);
//   console.log("getting data 3");
//   await getdata(3);
//   console.log("getting data 4");
//   await getdata(4);
// }

// IIFE =immediately invoked function expression 
// simple ek esa function jo automatically call ho jae or ek baar hi wo use hota dubara use krne ke liye hame usko copy krna padega 
// 1 (function (){})();
// 2 (()=>{})();
// 3 (async()=>{})();



// (async function (){
//   console.log("getting data 1");
//   await getdata(1);
//   console.log("getting data 2");
//   await getdata(2);
//   console.log("getting data 3");
//   await getdata(3);
//   console.log("getting data 4");
//   await getdata(4);
// })();