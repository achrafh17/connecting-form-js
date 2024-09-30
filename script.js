const submit = document.querySelector("button");
const errorfirst = document.querySelector("#error-first");
const errorlast = document.querySelector("#error-last");
const erroremail = document.querySelector("#error-email");
const errormailmessage = document.querySelector("#error-message-mail");
const errorfirstmessage = document.querySelector("#error-message-first");
const errorlastmessage = document.querySelector("#error-message-last");
const errorpasswordmessage = document.querySelector("#error-message-password");
const errorpassword = document.querySelector("#error-password");
const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailinput = document.querySelector("#emailinput");
const lastinput = document.querySelector("#lastinput");
const firstinput = document.querySelector("#firstinput");
const passwordinput = document.querySelector("#passwordinput");
function checkemail() {
  if (!emailpattern.test(emailinput.value)) {
    erroremail.style.opacity = "1";
    errormailmessage.style.opacity = "1";
  } else {
    erroremail.style.display = "none";
    errormailmessage.style.opacity = "0";
  }
}
function checkfirst() {
  if (firstinput.value == "") {
    errorfirst.style.opacity = "1";
    errorfirstmessage.style.opacity = "1";
  } else {
    errorfirst.style.opacity = "0";
    errorfirstmessage.style.opacity = "0";
  }
}
function lastfunction() {
  if (lastinput.value == "") {
    errorlast.style.opacity = "1";
    errorlastmessage.style.opacity = "1";
  } else {
    errorlast.style.opacity = "0";
    errorlastmessage.style.opacity = "0";
  }
}
function paswordcheck() {
  if (passwordinput.value == "") {
    errorpassword.style.opacity = "1";
    errorpasswordmessage.style.opacity = "1";
  } else {
    errorpassword.style.opacity = "0";
    errorpasswordmessage.style.opacity = "0";
  }
}
submit.addEventListener("click", checkemail);
submit.addEventListener("click", paswordcheck);
submit.addEventListener("click", lastfunction);
submit.addEventListener("click", checkfirst);
