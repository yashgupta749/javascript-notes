// callback hell
function getdata(dataid,nextdata){
  setTimeout(()=>{
    console.log("data",dataid);
    nextdata();
  },1000);
}

getdata(1,()=>{
  console.log("getting data2");
  getdata(2,()=>{
    console.log("getting data3");
    getdata(3,()=>{
      console.log("all data is complete")
    });
  });
});

//promises chain



// async
function getdata(dataid){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data",dataid);
      resolve("success");
    },1000);
  })
}

async function getalldata(){
  console.log("getting data 1");
  await getdata(1);
  console.log("getting data 2");
  await getdata(2);
  console.log("getting data 3");
  await getdata(3);
  console.log("getting data 4");
  await getdata(4);
}