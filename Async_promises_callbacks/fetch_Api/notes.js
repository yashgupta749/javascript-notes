// api stand for application programming interface


// const URL="https://cat-fact.herokuapp.com/facts";

// const getFacts=async()=>{
//   console.log("getting data....");
//   let response =await fetch(URL);
//   console.log(response);//json format hai ye 
// }
//ye jo hai wo same data nhi dega jo hame is api se direct browser se milti hai so uske liye kuch term hai 
// AJAX is asynchronous JS &XML 
// JSON is javascript object notation 
// JSON()method is used to return a second promises that resolve with the result of parsing the response body text as JSON(input as JSON output as js object ) 

// response(JSON)-> JS object me convert krna hoga 



// if want to print in browser page then 



const URL="https://cat-fact.herokuapp.com/facts";
const doubt=document.querySelector("#doubt");
const btn= document.querySelector("#get");

//using async 

// const getFacts=async()=>{
//   console.log("getting data....");
//   let response =await fetch(URL);
//   console.log(response);//json format hai ye
//   let data=await response.json();//convert in readable format
//   doubt.innerText=data[0].text;
// }




// using promises

// function getFacts(){
//   fetch(URL)
//   .then((response)=>{
//     return response.json();
//   })
//   .then((data)=>{
//     console.log(data);
//     doubt.innerText=data[0].text;
//   });
// }

//  btn.addEventListener("click",getFacts);

// fetch api post 





