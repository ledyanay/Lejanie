   /* function SignUp(){
        let uname = document.getElementById("username").value;
        let pass = document.getElementById("password").value;

        if (pass.length < 8 || pass.length > 16) {
            alert("8-16 character password only.");
            return;
        }
    
        localStorage.setItem("uName", uname);
        localStorage.setItem("pass", pass);

        window.location.href= "home.html";
        window.open("home.html", "_blank");   
    }
*/
    

    function login(){
        let LoginUser = document.getElementById("Lusername").value;
        let loginPass = document.getElementById("Lpassword").value;

        let storedUName = "admin123";
        //localStorage.getItem("admin123");
        let storedPass = "admin123";
        //localStorage.getItem("admin123");

        if ((LoginUser !== storedUName && LoginUser !== storedEmail) || loginPass !== storedPass) {
            alert("Wrong email/username or password.");
            document.getElementById("lgnBtn").disabled = true;
        setTimeout(()=>{
            alert("Please try again now.");
            document.getElementById("lgnBtn").disabled = false;
        },10000)
        return;
    } else{
        window.location.href= "home.html";
    }
}