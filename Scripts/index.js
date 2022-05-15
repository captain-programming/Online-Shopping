import navbar from "../Component/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

import loginFun from "../Component/login.js";

document.getElementById("popup").innerHTML=loginFun();

import signupFun from "../Component/signup.js";

document.querySelector(".signup-now").addEventListener("click", () =>{
    // console.log("ok");
    document.getElementById("popup").innerHTML=signupFun();
})




// function cartpage(ele){
    
//     userProduct.push("ok");
// }



// localStorage.setItem("userProduct", JSON.stringify(product));
//     alert("Your product successfully a added cart")
//     window.location.href="./cart.html";