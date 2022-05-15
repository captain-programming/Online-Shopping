import navbar from "../Component/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


document.getElementById("submit").addEventListener("click", ()=>{
    getAddress();
})

let userAddress=[];

let getAddress=()=>{
    
    let getInfo={
        
        country: document.getElementById("country").value,
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        pincode: document.getElementById("pincode").value,
        Address: document.getElementById("address1").value,
        Delevary: document.getElementById("delevary-option").value,
    }

    userAddress.push(getInfo);

    localStorage.setItem("userAddress", JSON.stringify(userAddress));

    alert("Your Order Successfully Placed");
    alert("Thank you chooding this app");

    window.location.href="./index.html";

//     setTimeout(function (){
//         alert("Your Order book");
//     }, 1000,);
//     setTimeout(function (){
//         alert("Your Order Packed");
//     }, 2000);
//     setTimeout(function (){
//         alert("Your Order Dispattched");
//     }, 3000);
//     setTimeout(function (){
//         alert("Your Order Successfully Done");
//     }, 4000);
//     setTimeout(function (){
//         alert("Thank you chooding this app");
//     }, 5000);
};