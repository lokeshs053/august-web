function login() {

     let email = document.getElementById("email")
     let password = document.getElementById("password")

     console.log(email.value)
     console.log(password.value)

    let appRegisterObject = localStorage.getItem("appRegister")
    console.log(appRegisterObject)
    console.log(appRegisterObject.email)
    let appRegisterParsedObject = JSON.parse(appRegisterObject)
    console.log(appRegisterParsedObject)
    console.log(appRegisterParsedObject.email)

    if(email.value == appRegisterParsedObject.email 
        && password.value ==appRegisterParsedObject.password ) {
            let loginMessage = document.getElementById("loginMessage")
            loginMessage.innerHTML = "Login Sucess"
            loginMessage.style.color = "green"
            window.location.href="https://facebook.com"
    } else {
       let loginMessage = document.getElementById("loginMessage")
       loginMessage.innerHTML = "Invalid Email or password"
       loginMessage.style.color = "red"
    }

}