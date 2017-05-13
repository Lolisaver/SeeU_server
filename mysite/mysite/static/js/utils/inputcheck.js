//檢查contactus欄位
function validateContactus() {
    var comment = document.forms["contactus"]["comment"].value;
    var email = document.forms["contactus"]["email"].value;
    var name = document.forms["contactus"]["name"].value;

    if (name == ""||email == ""||comment == "") {
        alert("All blocks must be filled out");
        return false;
    }
    if(!validateEmail(email))
    {
        alert("Email is not correct");
        return false;
    }
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);    
}