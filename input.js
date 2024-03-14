let c1o1 = document.querySelector('.c1o1') ;
let c1o2 = document.querySelector('.c1o2') ;
let c2o1 = document.querySelector('.c2o1') ;
let c2o2 = document.querySelector('.c2o2') ;
let c3o1 = document.querySelector('.c3o1') ;
let c3o2 = document.querySelector('.c3o2') ;
let button = document.querySelector("button");
let message = document.querySelector('.message')
let q1 
let q2
let q3


c1o1.addEventListener("click", function() {
  q1=1;
c1o1.style.border="2px solid #008cba80";
   });

 c1o2.addEventListener("click", function() {
  q1=2;
  c1o2.style.border="2px solid #008cba80";
  });

 c2o1.addEventListener("click", function() {
   q2=1;
   c2o1.style.border="2px solid #008cba80";
   });

 c2o2.addEventListener("click", function() {
   q2=2;
   c2o2.style.border="2px solid #008cba80";
   });

  c3o1.addEventListener("click", function() {
  q3=1;
  c3o1.style.border="2px solid #008cba80";
  });

  c3o2.addEventListener("click", function() {
  q3=2;
  c3o2.style.border="2px solid #008cba80";
  });


button.addEventListener("click", function() {
  let message = document.querySelector(".message");
  if(q1 === 1 && q2 === 1 || q2 === 1 && q3 === 2){
    message.innerHTML = "Earth Sign!";
    button.style.display = "none";
  } else if (q1 === 1 && q2 === 2 || q2 === 2 && q3 === 2){
    message.innerHTML = "Air Sign!";
    button.style.display = "none";
  } else if (q1 === 2 && q2 === 1 || q2 === 1 && q3 === 1){
    message.innerHTML = "Fire Sign!";
    button.style.display = "none";
  } else if (q1 === 2 && q2 === 2 || q2 === 2 && q3 === 1){
  message.innerHTML = "Water Sign!";
  button.style.display = "none";
  }
});
