let loginData = localStorage.getItem("login_data");
let cred = document.getElementById("cred")
let main = document.getElementById("main")
let data = JSON.parse(localStorage.getItem("resta_data"))
display(data)
let cartArr = JSON.parse(localStorage.getItem("cartData"))

if (loginData != null){
    cred.innerHTML = "";
    let name = document.createElement("h1")
    name.innerText = loginData
    let cart = document.createElement("button")
    cart.innerText = "CART"
    let logout = document.createElement("button")
    logout.innerText = "Logout"
    logout.addEventListener("click", logoutfun)

    cred.append(name,cart,logout)
}

function logoutfun(){
    localStorage.removeItem("login_data")                        
    window.location.href = "../Html/login.html";
}

function display(data){
    data.map(function(el,index){

        let div = document.createElement("div")
        let name = document.createElement("h1")
        name.innerText = "Dish Name:" + " " + el.name;
        let price = document.createElement("h3")
        price.innerText = "Price: " + " " + el.price;
        let img = document.createElement("img")
        img.src = el.img;
        
        let cartbtn =  document.createElement("button")
        cartbtn.addEventListener("click", function(){
            addcart(el)
        })
        cartbtn.innerText = "Add to Cart"  
        
        let buybtn =  document.createElement("button")
        buybtn.innerText = "Buy now"
        div.append(img, name, price, cartbtn, buybtn)
    
        main.append(div)
    })

    function addcart(cartdata){
        cartArr.push(cartdata)
        localStorage.setItem("cartdata", JSON.stringify(cartArr))
    }
}