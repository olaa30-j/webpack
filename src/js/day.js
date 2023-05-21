import {img , div} from './dom';

// add border onfoucs and remove it after finish
var nameEL = document.getElementById("name");
var message = document.getElementById("message");
var invalid = document.getElementById("invalid");

//nameValidation
function nameValid() {
  nameEL.style.background = "silver";
  if (nameEL.value.length < 3 || !isNaN(nameEL.value) ) {
    nameEL.style.border = "red 2px solid";
    message.innerText = "**invalid name";
    message.style.color = "red";
    return false;
  }else{
    nameEL.style.border = "darkblue 2px solid";
    message.innerText = "valid name";
    message.style.color = "green";
  }
}


//password validation 
const getPass = document.getElementById("pass");
const getConfirmPass = document.getElementById("repass");


function validate_password() {
  if (getPass.value != getConfirmPass.value) {
    invalid.innerText = "**doesnt match password";
    return false;
  } else {
    invalid.innerText = "Matched password";
    invalid.style.color = "darkblue";
    return true;
  }
}

//Register button, which redirects to another page saying: “Thank you, Full Name for registering in our website”.
var registeringButton = document.getElementById("button");
var agree = document.getElementById("agree");

registeringButton.addEventListener("click", function () {
  nameValid();
  validate_password();
  if (!agree.checked){
    alert("You must agree"); 
    return false;
  }
  var thanks = window.open("", "Thanks Message", "_blank");
  thanks.document.write("<p>Thank you, Full Name for registering in our website</p>");
});
