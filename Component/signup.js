function signupForm(){
    return `
    <form id="form1">
        <span class="close-btn" onclick="removeFun()">&times;</span>
        <h2>Signup</h2>
        <input type="text" id="name" placeholder="Enter Your Name" required><br>
        <input type="email" id="email" placeholder="Enter Your Email" required><br>
        <input type="tel" id="mob" placeholder="Enter Your Mobile Number" required><br>
        <select id="question" required>
            <option value="What was your first car">What was your first car?</option>
            <option value="What is the name of your first pet?">What is the name of your first pet?</option>
            <option value="What is the name of the town where you were born?">What is the name of the town where you were born?</option>
            <option value="What elementary school did yoy attend?">What elementary school did yoy attend?</option>
        </select><br>
        <input type="text" id="answer" placeholder="Enter answer" required><br>
        <input type="password" id="pass" placeholder="Enter your password" required><br>    
        <input id="submit-info" type="submit" value="Signup" onclick="userDetails()">
        <div id="acc">
        <span> Already account:</span><span class="login1-now" onclick="loginPage()">Login Now</span>
        </div>
    </form>
`
}

export default signupForm;
