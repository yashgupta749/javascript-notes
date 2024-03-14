const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  const dropdowns=document.querySelectorAll(".dropdown select");
  const btn=document.querySelector('form button');
  const fromcurr=document.querySelector(".from select");
  const tocurr=document.querySelector(".to select");
  const msg=document.querySelector(".msg");

  for(let select of dropdowns){
    for(currcode in countryList){
      let newoption=document.createElement("option");
      newoption.innerText=currcode;
      newoption.value=currcode;

      if(select.name==="from" &&currcode==="USD"){
        newoption.selected="selected";
      }
      else if(select.name==="to" &&currcode==="INR"){
        newoption.selected="selected";
      }

      select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
      updateflag(evt.target);// target basiccaly hame btataa hai ki jo hamne change kiya hai use kha update krna hai 
    });
  }
  
  const updateExchangeRate= async()=>{
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval==""||amtval<0){
      amtval=1;
      amount.value="1";
    } 

     const URL=`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
     let response=await fetch(URL);
     let data=await response.json();
     let rate=data[tocurr.value.toLowerCase()];


     let finalAmount=amtval*rate;
     msg.innerText=`${amtval}${fromcurr.value}=${finalAmount}${tocurr.value}`;
  }


  const updateflag=(element)=>{
    
    let currCode=element.value;
    //console.log(currCode);
    let countrycode=countryList[currCode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
  };

  btn.addEventListener ("click",async (evt)=>{
    evt.preventDefault();//prevent default basically jo automatic internal function work kr rha tha like refresh or link me change hona wo sab band kr dena
    updateExchangeRate();

  });
  
  window.addEventListener("load", () => {
    updateExchangeRate();
  });
