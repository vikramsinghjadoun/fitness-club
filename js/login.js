function validation() {
    function validEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
}
    var user = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('con-password').value;
    var phnNo = document.getElementById('number').value;
    // user name condition
    if (user == "") {
        document.getElementById('nameAlert').innerHTML = "** Plese Enter your name";
        remove('hello')
        return false;
    }
    if ((user.length <= 2) ||(user.length > 20)){
        document.getElementById('nameAlert').innerHTML = "** user name is in between 2 to 20";
    }
    if(!isNaN(user)){
        document.getElementById('nameAlert').innerHTML = "** only characters are allowed";
    }

    // user email condition
    if (email == "") {
        document.getElementById('emailAlert').innerHTML = "** Plese Enter your email";
        return false;
    }
    if (email.indexOf('@') <= 0){
        document.getElementById('emailAlert').innerHTML = "** position of @ are incorrect";
        return false;
    }
    if(email.charAt(email.length - 4) != '.' && email.charAt(email.length - 3) != '.'){
        document.getElementById('emailAlert').innerHTML = "** position of . are incorrect";
        return false;
    }
    
    // user password condition
    if (password == "") {
        document.getElementById('passAlert').innerHTML = "** Plese Enter your password";
        return false;
    }
    if ((user.length <= 5) ||(user.length > 20)){
        document.getElementById('passAlert').innerHTML = "** user password lenght is in between 5 to 20";
    }
    if(password != confirm){
        document.getElementById('passAlert').innerHTML = "** user password are not matched";
        return false;
    }
    
    // user confirm password condition
    if (confirm == "") {
        document.getElementById('conAlert').innerHTML = "** Plese Enter your confirm-password";
        return false;
    }

    //user mobile number condition
    if (phnNo == "") {
        document.getElementById('mobileAlert').innerHTML = "** Plese Enter your Number";
        return false;
    }
    if(isNaN(phnNo)){
        document.getElementById('mobileAlert').innerHTML = "** user must write digit here not character";
        return false;
    }
    if(phnNo.length != 10){
        document.getElementById('mobileAlert').innerHTML = "** Enter correct 10 digit no here";
        return false;
    }
}

function remove(){
    setTimeout(()=>document.querySelectorAll('.remove').forEach(i=>i.innerHTML = ""),3000);
}