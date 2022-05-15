import navbar from "../Component/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

let cartArr=JSON.parse(localStorage.getItem("userProduct")) || [];

let appendCart=(element, id) => {
    
    document.getElementById(id).innerHTML=null;
    element.forEach((element) => {
        
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=element.image;
        let title1=document.createElement("h4");
        title1.innerText=element.title;
        let price=document.createElement("p");
        price.innerText=`Price: ${element.price.raw}`;
            let rating=document.createElement("p");
            rating.innerText=`Rating: ${element.rating}*`;
            let ratingtotal=document.createElement("p");
            ratingtotal.innerText=`All Rating: ${element.ratings_total}`;
            let button=document.createElement("button");
            button.innerText="Remove";
            button.addEventListener("click", ()=>{
                removeProduct(element.title);
            });

        div.append(img, title1, rating, ratingtotal, price, button);    
        
       document.getElementById(id).append(div); 
       
    });

}

appendCart(cartArr, "product");

    document.getElementById("cart").innerText=`My Cart(${cartArr.length})`;
    document.getElementById("totalProduct").innerText=`Total Product(${cartArr.length})`;


    let totalCartPrice=0;
    // console.log(dataArr);
    for(let i=0; i<cartArr.length; i++){
        totalCartPrice+=cartArr[i].price.value;
    }

    document.querySelector("#value").innerText=totalCartPrice;


    let removeProduct=(ele)=>{
      let newData=cartArr.filter((element) => {
          console.log(ele != element.title)
         return ele != element.title})
    
        //  appendCart(newData, "product");
         
         localStorage.setItem("userProduct",JSON.stringify(newData));
         window.location.reload();
        // console.log(newData)
    }