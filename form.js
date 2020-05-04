function validation(){
	var name = document.forms['vform']['name']
	var breed = document.forms['vform']['breed']
	var email=document.forms['vform']['email']
	var password=document.forms['vform']['password']

	var name_error=document.getElementById("name_error");
	var breed_error=document.getElementById("breed_error");
	var email_error=document.getElementById("email_error");
	var password_error=document.getElementById("password_error");

	// name.addEventListener("blur",nameVerify,true);
	// email.addEventListener("blur",emailVerify,true);
	// password.addEventListener("blur",passwordVerify,true);



	if(name.value==''){
		name_error.textContent = "Name is required";
		name.style.border= "1px solid red";
		name.focus();
		return false;
	}
	if(breed.value==''){
		breed_error.textContent = "Breed is required";
		breed.style.border= "1px solid red";
		breed.focus();
		return false;
	}
	if(email.value==''){
		email_error.textContent = "Email is required";
		email.style.border= "1px solid red";
		email.focus();
		return false;
	}
	// if (email.value.indexOf("@",0)<0) {
	// 	window.alert("Please enter a valid email address")
	// 	email.focus();
	// 	return false;
	// }
	// if (email.value.indexOf(",",0)<0) {
	// 	window.alert("Please enter a valid email address")
	// 	email.focus();
	// 	return false;
	// }
	if(password.value==''){
		password_error.textContent = "password is required";
		password.style.border= "1px solid red";
		password.focus();
		return false;
	}
	if (phone.value=='') {
		number_error.textContent = "password is required";
		number.style.border= "1px solid red";
		number.focus();
		return false;
	}

	return true;
}
