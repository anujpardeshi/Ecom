let signup_data = JSON.parse(localStorage.getItem("signupData"));
let form = document.querySelector("form")
form.addEventListener("submit", getData)

function getData(event){
    event.preventDefault()
    
    let login_obj = {
        email: form.email.value,
        password: form.password.value,
    };

    let flag = false;
    signup_data.forEach(function(el,index) {
        if(login_obj.email == el.email){
            if(login_obj.password==el.password){
                localStorage.setItem("login_data", el.username)
                flag = true;
            } else {
                flag = "wrong";
            }
        } 
    });

    if (flag==true){
        alert("login");
        window.location.href = "../Html/index.html"
    } else if (flag = "wrong"){
        alert("wrong password")
    } else {
        alert("wrong credential")
    }

}