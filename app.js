
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


/*const name = document.getElementById('name');
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
*/


  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("myForm");
    var status = document.getElementById("status");


    // Success and Error functions for after the form is submitted

    
    function success() {
      form.reset();
      status.classList.add('success');
      status.innerHTML = "Your submission has been sent.";
    }

    function error() {
        status.classList.add('error');
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }



