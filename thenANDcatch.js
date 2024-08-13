const getPromise=(data)=>{
  return new Promise((resolve,reject)=>{
    console.log("data",data);
    //resolve("success");
    reject("rejected")
  })
}
let promise=getPromise(123);
// promise.then((res)=>
// {
//   console.log("showing the promise.then",res)
// })
 promise.catch((err)=>
  {
    console.log("showing the promise.then",err)
  })