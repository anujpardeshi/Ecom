let form = document.querySelector("form")
form.addEventListener("submit", getData)


// let username = document.getElementById("username").value;
// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;
let signup_arr = JSON.parse(localStorage.getItem("signupData")) || [];

function getData(event){
    event.preventDefault()
    let obj = {
        username: form.username.value, 
        email: form.email.value, 
        password: form.password.value, 
    };
signup_arr.push(obj);
 console.log(signup_arr)

localStorage.setItem("signupData", JSON.stringify(signup_arr));

alert("Sign up Successfully")
window.location.href = "../Html/login.html";
}