document.getElementById("btn-submit").addEventListener('click', function () {
    // Email Field Value
    const emailField = document.getElementById("exampleInputEmail1");
    const email = emailField.value;

    //password field value 
    const passField = document.getElementById("exampleInputPassword1");
    const password = passField.value;

    // user validation
    if (email === "millat@gmail.com" && password === "123") {
        window.location.href = 'bank.html';
    } else {
        alert("Invalid User!!!")
    }
})