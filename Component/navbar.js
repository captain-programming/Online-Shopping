function navbar(){
    return `
    <div><a href="./index.html"><img src="https://icon-library.com/images/online-store-icon/online-store-icon-26.jpg"></a></div>
        <div>
        <a href="./cart.html" id="cart">My Cart</a>
        <a href="#">My Orders</a>
        <a href="#">Message Us</a>
        <a href="#">About</a>
        <span onclick="loginFun()" id="userName">Login</span>
        </div>
        `;
}

export default navbar;

