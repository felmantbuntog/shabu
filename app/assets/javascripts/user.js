$(document).ready(function(){

	$("#frm_registration").submit(function(event){
		var submit = false;
		
		termsIsChecked 		= $("#user_terms_of_service").is(":checked");
		uEmail 				= $("#user_email");
		uPassword 			= $("#user_password");
		uConfirmPassword 	= $("#user_password_confirmation");
		uFirstName  		= $("#user_firstname");
		uLastName  			= $("#user_firstname");
		uContactNumber  	= $("#user_firstname");
		uOtherInformation  	= $("#user_firstname");
		
		if(uEmail.val().length <= 0 ){
			uEmail.after("<p>Email can't be blank</p>");
			submit = false;
		}else{
			submit = false;
		}

		if(uPassword.val().length === 0){
		   //uPassword.after("<p>Password can't be blank</p>");
		   console.log("jameshwart");
		   submit = false;
		}else if(uPassword.length >0){
			  console.log("asdf");
			submit = true;
		}

		// if(uConfirmPassword.length < 0){
		// 	uConfirmPassword.after("<p>Confirm password can't be blank</p>");
		// 	submit = false;
		// }else{
		// 	submit = false;
		// }

		// if(uFirstName.length < 0){
		// 	uFirstName.after("<p>First Name can't be blank</p>");
		// 	submit = false;
		// }else {
		// 	submit = false;
		// }

		// if(uLastName.length < 0){
		// 	uLastName.after("<p>Last Name can't be blank</p>");
		// 	submit = false;
		// }else {
		// 	submit = false;
		// }

		// if(uContactNumber.length < 0){
		// 	uContactNumber.after("<p>Contact Number can't be blank</p>");
		// 	submit = false;
		// }else {
		// 	submit = false;
		// }

		if(submit === false){
			return false;
		}
		
		
	});

	function IsEmail(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
	}
});