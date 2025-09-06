//Button Click event//
const button = document.getElementById('button');
const message = document.getElementById('message');

button.addEventListener('click', function(){
    message.textContent = "You clicked to learn more about us!";
})

//Input field event//

const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input', function(){
    output.textContent = "Your suggestion: " + input.value;
});

//Link section event//

const link = document.getElementById('link');
const info = document.getElementById('info');

link.addEventListener('mouseover', function(){
    link.style.color = 'red';
})

link.addEventListener('mouseout', function(){
    link.style.color = 'black';
})

//Form submission event//

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const messages= document.getElementById('messages');
const response = document.getElementById('response');



form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form.checkValidity()) {
    alert("Submitted! Thank you 😊");

    response.textContent = `Thanks! We signed up: ${email.value}`;

    form.reset();
  } else {
    response.textContent = "Please enter a valid email.";
  }
});

    
