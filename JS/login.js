function loginForm(){
    validate();
}

function validate(){
    /*INPUTS ELEMENTS*/
    var firstName_Textbox = document.getElementById('txtFirstName');
    var lastName_Textbox = document.getElementById('txtLastName');
    var email_Textbox = document.getElementById('txtEmail');
    var password_Textbox = document.getElementById('txtPassword');
    
    /*INPUTS VALUE*/
    var firstName = document.getElementById('txtFirstName').value;
    var lastName = document.getElementById('txtLastName').value;
    var email = document.getElementById('txtEmail').value;
    var password = document.getElementById('txtPassword').value;
    
    /*ERROR ICON*/
    var first_icon_error = document.getElementById('first_icon_error');
    var last_icon_error = document.getElementById('last_icon_error');
    var email_icon_error = document.getElementById('email_icon_error');
    var pass_icon_error = document.getElementById('pass_icon_error');
    
    /*ERROR MESSAGES*/
    var firstName_error = document.getElementById('first_error');
    var lastName_error = document.getElementById('last_error');
    var email_error = document.getElementById('email_error');
    var pass_error = document.getElementById('pass_error');

    
    if(firstName === '') {
        firstName_error.style.display = "block";
        firstName_Textbox.style.border = "1.5px solid red";
        firstName_Textbox.style.borderRadius = "3px";
        first_icon_error.style.display = "block";
	} else {
        firstName_error.style.display = "none";
        firstName_Textbox.style.border = "1px solid green";
        firstName_Textbox.style.borderRadius = "3px";
        first_icon_error.style.display = "none";
	}
    if(lastName === '') {
		lastName_error.style.display = "block";
        lastName_Textbox.style.border = "1.5px solid red";
        lastName_Textbox.style.borderRadius = "3px";
        last_icon_error.style.display = "block";
	} else {
        lastName_error.style.display = "none";
        lastName_Textbox.style.border = "1px solid green";
        lastName_Textbox.style.borderRadius = "3px";
        last_icon_error.style.display = "none";
	}
    if(email === '') {
		email_error.style.display = "block";
        email_Textbox.style.border = "1.5px solid red";
        email_Textbox.style.borderRadius = "3px";
        email_icon_error.style.display = "block";
	}else if (!isEmail(email)) {
		email_error.style.display = "block";
        email_Textbox.style.border = "1.5px solid red";
        email_Textbox.style.borderRadius = "3px";
        email_icon_error.style.display = "block";
	} else {
        email_error.style.display = "none";
        email_Textbox.style.border = "1px solid green";
        email_Textbox.style.borderRadius = "3px";
        email_icon_error.style.display = "none";
	}
    if(password === '') {
		pass_error.style.display = "block";
        password_Textbox.style.border = "1.5px solid red";
        password_Textbox.style.borderRadius = "3px";
        pass_icon_error.style.display = "block";
	} else {
        pass_error.style.display = "none";
        password_Textbox.style.border = "1px solid green";
        password_Textbox.style.borderRadius = "3px";
        pass_icon_error.style.display = "none";
	}
   
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}