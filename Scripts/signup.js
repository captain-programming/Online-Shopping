function loginFun(){
    document.querySelector("#popup").classList.add("active");
    // document.querySelector("body").style.background="blur";
}
function removeFun(){
    document.querySelector("#popup").classList.remove("active");
}

let loginPage= () =>{
    window.location.href="./index.html";
}


//signup and login info

let userArr=JSON.parse(localStorage.getItem("userInfo")) || [];

let userDetails= () =>{
    event.preventDefault();

    let emailConf = document.getElementById("email").value;
    let count1=0;

    userArr.map((ele) =>{
        if(ele.email===emailConf){
            count1++;
        } 
    })  

    if(count1===0){
        let userInfo={
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            mob: document.getElementById("mob").value,
            question: document.getElementById("question").value,
            answer: document.getElementById("answer").value,
            pass:document.getElementById("pass").value,
        }
    
        userArr.push(userInfo);
        // console.log(userInfo);
    
        localStorage.setItem("userInfo", JSON.stringify(userArr));
    
        alert("Account created successfuly");
        alert("Please login now");
        // window.location.href="./index.html";
        document.querySelector("#popup").classList.remove("active");
    }else{
        alert("Already use Email");
    }
    
}


let loginCheck= () =>{
    event.preventDefault();
       let email=document.getElementById("email").value;
       let pass=document.getElementById("pass").value;

       let count=0;
       let username="";

    userArr.map((el) => {
        if(el.email===email && el.pass===pass){
            count++;
            username=el.name;
        }
    });

    if(count===1){
        alert("Login Succefull");
        // window.location.href="./index.html";
        document.getElementById("userName").innerText=`Hii ${username}`;
        document.querySelector("#popup").classList.remove("active");
    }else{
        alert("Login Failed");
    }


}


//index js file


const api= "D094D0DC969840D5AE321978EE36B1DF";
// https://api.rainforestapi.com/request?api_key=200E6484A49E41109C6C1F834059A0A2&type=product&amazon_domain=amazon.in&asin=B073JYC4XM&output=json



let searchProduct = async (api) => {
    try{
        let res=await fetch(`../api/api.json`);

        let product=await res.json();
        // console.log(product);
        appendProduct(product);
    }catch(err){
        console.log(err);
    }
}

searchProduct(api);

let appendProduct = (data) =>{

    let firstList=data.compare_with_similar;
    let secondList=data.sponsored_products;
    let thirdList=data.frequently_bought_together.products

    // console.log(firstList);
    // console.log(secondList);
    // console.log(thirdList);

    appenddata(secondList, "product");

}

let appenddata=(data, id) => {

    data.forEach(element => {
        
        let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=element.image;
            let title1=document.createElement("h4");
            title1.innerText=element.title;
            let price=document.createElement("p");
            price.innerText=`Price: ${element.price.raw}`;
            let button=document.createElement("button");
            button.innerText="Add to Cart";
            button.addEventListener("click", ()=>{
                addCart(element);
            });
            let rating=document.createElement("p");
            rating.innerText=element.rating;
            let ratingtotal=document.createElement("p");
            ratingtotal.innerText=element.ratings_total

        div.append(img, title1, price, button);    

       document.getElementById(id).append(div); 
        
    });


}

function addCart(data){

    alert("Product successfully added");
    var dataArr=JSON.parse(localStorage.getItem("userProduct")) || [];
    dataArr.push(data);

    document.getElementById("cart").innerText=`My Cart(${dataArr.length})`;
    localStorage.setItem("userProduct",JSON.stringify(dataArr));
}


