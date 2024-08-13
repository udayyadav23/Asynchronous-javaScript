function retrieveData(data,getNext){
  setTimeout(()=>
  {
    console.log("data display",data);
    if(getNext){
      getNext();
      }
  },3000)
}
// retrieveData(1,retrieveData(2)); in this the method is passed directly inside the other so the passed method execute 1 st.
// call back hell means the function with nested callbacks 
retrieveData(1,()=>{
  retrieveData(2,()=>{
      retrieveData(3);});
});