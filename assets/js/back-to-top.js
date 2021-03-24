const backtotop=document.querySelector("back-to-top");
window.addEventListener("scroll",()=>{
  if(window.pageYOffset >100){
  backtotop.classList.add("active");
}else{
  backtotop.classList.remove("active");
}
})