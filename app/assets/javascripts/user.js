// $(document).ready(function(){

// 	$("#frm_registration").submit(function(event){
// 		var submit = false;
		
// 		termsIsChecked 		= $("#user_terms_of_service").is(":checked");
// 		uEmail 				= $("#user_email").val();
// 		uPassword 			= $("#user_password").val();
// 		uConfirmPassword 	= $("#user_password_confirmation").val();
// 		uFirstName  		= $("#user_firstname").val();
// 		uLastName  			= $("#user_firstname").val();
// 		uContactNumber  	= $("#user_firstname").val();
// 		uOtherInformation  	= $("#user_firstname").val();
		
// 		// if(uEmail.length <= 0 ){
// 		// 	uEmail.after("<p>Email can't be blank</p>");
// 		// 	submit = false;
// 		// }else{
// 		// 	submit = false;
// 		// }

// 		if(uPassword.length === 0){
// 		   //uPassword.after("<p>Password can't be blank</p>");
// 		   console.log("jameshwart");
// 		   submit = false;
// 		}else if(uPassword.length >0){
// 			  console.log("asdf");
// 			submit = true;
// 		}

// 		// if(uConfirmPassword.length < 0){
// 		// 	uConfirmPassword.after("<p>Confirm password can't be blank</p>");
// 		// 	submit = false;
// 		// }else{
// 		// 	submit = false;
// 		// }

// 		// if(uFirstName.length < 0){
// 		// 	uFirstName.after("<p>First Name can't be blank</p>");
// 		// 	submit = false;
// 		// }else {
// 		// 	submit = false;
// 		// }

// 		// if(uLastName.length < 0){
// 		// 	uLastName.after("<p>Last Name can't be blank</p>");
// 		// 	submit = false;
// 		// }else {
// 		// 	submit = false;
// 		// }

// 		// if(uContactNumber.length < 0){
// 		// 	uContactNumber.after("<p>Contact Number can't be blank</p>");
// 		// 	submit = false;
// 		// }else {
// 		// 	submit = false;
// 		// }

// 		if(submit === false){
// 			return false;
// 		}
		
		
// 	});

// 	function IsEmail(email) {
// 	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 	  return regex.test(email);
// 	}
// });