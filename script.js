//* login button functionality
document.getElementById("loginButton")
.addEventListener("click", function(e){
    e.preventDefault()
    const mobileNumber = 880171234567;
    const pinNumber = 12344;
    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    console.log(mobileNumberValueConverted , pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="home.html"
    }
    else{
        alert("Invalid credentials");
    }
}) 
