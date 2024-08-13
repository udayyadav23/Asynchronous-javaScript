// Promise Chaining
function asynch1 ()
{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
      console.log("data1");
      resolve("success");
    })
  })
}
function asynch2()
  {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>
      {
        console.log("data2");
        resolve("success");
      },5000)
    })
  }
   console.log("fetching data1......");
  let prom1=asynch1();
  prom1.then((res)=>{
    console.log("resolved")
    console.log("fetching data2......");
  let prom2=asynch2();
  prom2.then((res)=>{
    console.log("resolved")
  })
  })

  function retrieveData(data,getNext){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>
        {
          console.log("data",data);
          resolve("suceess");
        },3000)
    })
  }

   //promise chain

  retrieveData(21).then((res)=>{
    console.log(res)
    retrieveData(22).then((res)=>{
      console.log(res);
    })
  })

  // Another way of promising chain
  retrieveData(21).then((res)=>{
    return retrieveData(23);
  }).then((res)=>{
    return retrieveData(24);
  }).then((res)=>{
    console.log(res);
  })

