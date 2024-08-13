async function retrieveData(data){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
      console.log("data",data);
      resolve("success");
    },3000)
  })
}
//async-await

async function retrieve(){
  console.log("data1 fetching........");
  await retrieveData(1);
  console.log("data2 fetching........");
  await retrieveData(2);
  console.log("data3 fetching........");
  await retrieveData(3);
  console.log("data4 fetching........");
  await retrieveData(4);
  console.log("data5 fetching........");
  await retrieveData(5);
}