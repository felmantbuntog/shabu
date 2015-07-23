$(document).ready(function(){

	$("#user_email").on('change keyup paste',function(){
		if(IsEmail($("#user_email").val())){
			//check server if the email is valid
			//send request to the server if and check if the email already exists
		}
	});
	$("#frm_registration").submit(function(event){
		
		uEmail 				= $("#user_email");
		uPassword 			= $("#user_password");
		uConfirmPassword 	= $("#user_password_confirmation");
		uFirstName  		= $("#user_firstname");
		uLastName  			= $("#user_firstname");
		uContactNumber  	= $("#user_firstname");
		uOtherInformation  	= $("#user_firstname");
		
		if(uEmail.val().length <= 0 ){
			$("label[for='user_email']").addClass("color-red").html("Email Address is empty");
			return false;
		}else if(uEmail.val().length > 0 ){
			
			if(!IsEmail(uEmail.val())){
				$("label[for='user_email']").addClass("color-red").html("Email Address is invalid");
				return false;
			}else{
				$("label[for='user_email']").removeClass("color-red").html("Email Address");
			}
			
		}

		if(uPassword.val().length <= 0){
		   $("label[for='user_password']").addClass("color-red").html("Password is empty");
		   return false;
		}else if(uPassword.length >0){
			 $("label[for='user_password']").removeClass("color-red");
		}

		if(uConfirmPassword.val().length <= 0){
			uConfirmPassword.after("<p>Confirm password can't be blank</p>");
			return false;
		}else if(uConfirmPassword.val().length > 0){
			 console.log(uPassword.val()+" ==== "+ uConfirmPassword.val());
			 if(uPassword.val() !== uConfirmPassword.val()){
			 	$("label[for='user_password']").addClass("color-red");
			 	$("label[for='user_password_confirmation']").addClass("color-red").html("Password Don't Match");
			 	return false;
			 }
		}

		if(uFirstName.val().length <= 0){
			$("label[for='user_firstname']").addClass("color-red").html("First Name is empty");
			return false;
		}

		if(uLastName.val().length <= 0){
			$("label[for='user_lastname']").addClass("color-red").html("First Name is empty");
			return false;
		}

		if(uContactNumber.val().length < 0){
			$("label[for='user_phonenumber']").addClass("color-red").html("Contact number is empty");
			return false;
		}
	});

	function IsEmail(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
	}
});