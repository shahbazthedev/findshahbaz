
AOS.init({
    offset:200,
    delay:100,
    duration:1000,
});

const scrolltp = document.querySelector("#scrolltp");
scrolltp.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});

window.addEventListener ("scroll" , function (){
    if(window.scrollY >= 700) {
        scrolltp.style.opacity =1;
    }else {
        scrolltp.style.opacity = 0;
    }
})


const name = document.getElementById('name');
const myForm = document.getElementById('myForm');
const yourBudget = document.getElementById('budget');
const project = document.getElementById('description');
const email = document.getElementById('email');
const errorElemt = document.getElementById('error');


myForm.addEventListener('submit', (e) => {
 
   if (name.value === '' || name.value == null){
       alert('Name is required');
   }

   if(yourBudget.value < 2000){
      alert('Budget must be greater then 1k')
   }

   if(project.value == null || project.value ==='' || project.value.length < 10){
    alert('Please explain your project');
   }

   if (message.length > 0){
    e.preventDefault();

    
   const request = new XMLHttpRequest();
   request.open("post" , "login.php");
   request.onload = function(){
       console.log(request.responseText);
   }

   request.send(new FormData (myForm));
    errorElemt.innerText = message.join(' ,');
   }
    
})




