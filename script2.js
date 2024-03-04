const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${mess.value}`;

    Email.send({
        SecureToken:"85662532-29f6-44b3-8f04-63b59620fd1e",
    //    Username : "vishal4256kr@gmail.com",
    //          Host : "smtp.elasticemail.com",
    // Password : "99BE33572BDE28241CEB5870DB8F4EE92717",
        To : "vishal4256kr@gmail.com",
        From : "vishal4256kr@gmail.com",
        Subject: subject. value,
        Body: bodyMessage
    }).then(
      message => {
        if (message == "OK" ){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
                
            });
        }
      }
    );
}
function checkInputs() {
    const items = document.querySelectorAll(".item");
    
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if (items[1].value != "") {
            checkEmail();
        }   
            items[1].addEventListener("keyup", () => {
            checkEmail();
            
    });
    
    item.addEventListener("keyup", () => {
        if (item.value != "") {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
    else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
    }
  });
}
}
function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");
    
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
    
        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }   
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }

}
function myfun () {
    var a = document.getElementById("mobilenumber").value;
    if(a=="") {
    document.getElementById("messages").innerHTML="** Please fill Mobile Number"; return false;
    }
    if(isNaN(a)) {
    document.getElementById("messages").innerHTML="** only Numbers are allowed";
    return false;
    }
    }
    </script>

function validatePhoneNumber(input_integer) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(input_integer);
  }
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
   
});