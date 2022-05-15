function loginForm(){
    return `
    <form id="form1">
    <span class="close-btn" onclick="removeFun()">&times;</span>
    <h2>Login</h2>
    <input type="email" id="email" placeholder="Enter Your Email" required><br>
    <input type="password" id="pass" placeholder="Enter your password" required><br>    
    <input id="submit-info" type="submit" value="Login" onclick="loginCheck()">
    <div id="acc">
    <span>Not account:</span><span class="signup-now">Create account</span>
    </div>
</form>
`
}

export default loginForm;