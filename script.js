const nav = document.querySelector('nav')
    if(nav){
        let btn = ""
        let name1=""
        if(localStorage.getItem("name")){
            btn = `<a href="./logout.html">Logout</a>`
            name1= `<span class='right'>Hi ${localStorage.getItem("name")}!</span>`
        }else{
            btn = `<a href="./login.html">Login</a>`
        }
        nav.innerHTML += btn
        nav.innerHTML += name1
    }

const loginGaurd = () => {
    if(!localStorage.getItem("name")){
        window.location.href = "login.html"
    }
}