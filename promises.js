function retrieveData(data,getNext){
  return new Promise((resolve,reject)=>{
  setTimeout(()=>
  {
    console.log("data display",data);
    if(data){
      resolve("success");
    }
    else{
      reject("Rejected")
    }
    if(getNext){
      getNext();
      }
  },6000)
});
}