function addition(a,b){
  console.log(a+b);
}
function calci(a,b,additionCallback){
  additionCallback(a,b);
}
calci(1,8,addition)