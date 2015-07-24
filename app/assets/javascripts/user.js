$(document).ready(function(){
	function checkEmailIfExists(myCallbackFunction){
		 $.post('/checkemail?email='+$("#user_email").val(),function(data){
			    	return myCallbackFunction(data);
		   });
	}

	$(document).on('change keyup paste','#user_password',function(){
		if($("#user_password").val().trim().length <= 0){
			$("#user_password").removeClass("margin-bottom-20").nextAll('p').remove();
			$("#user_password").parent().addClass('has-error');
			$("#user_password").after("<p class='color-red'>Password is empty!</p>");
		}else if($("#user_password").val().trim().length >0){
			$("#user_password").nextAll('p').remove();
			if($("#user_password_confirmation").val().trim().length > 0){
				 if(!($("#user_password").val() == $("#user_password_confirmation").val())){
				 	console.log($("#user_password").val()+"  "+$("#user_password_confirmation").val());
				 	$("#user_password").parent().addClass('has-error');
				 	$("#user_password_confirmation").parent().addClass('has-error');
				 	$("#user_password_confirmation").removeClass("margin-bottom-20").nextAll('p').remove();
					$("#user_password_confirmation").after("<p class='color-red'>Password Don't Match</p>");
				 	
				 }else if($("#user_password").val() == $("#user_password_confirmation").val()){
					$("#user_password").parent().removeClass('has-error');
				 	$("#user_password_confirmation").parent().removeClass('has-error');
				 	$("#user_password_confirmation").addClass("margin-bottom-20").nextAll('p').remove();
				 }
			}else{
				$("#user_password").addClass('margin-bottom-20').nextAll('p').remove();
				$("#user_password").parent().removeClass('has-error');
			}
			
		}
	});

	$(document).on('change keyup paste','#user_password_confirmation',function(){
		
		if($("#user_password_confirmation").val().trim().length <= 0){
			$("#user_password_confirmation").removeClass("margin-bottom-20").nextAll('p').remove();
			$("#user_password_confirmation").after("<p class='color-red'>Confirm password can't be blank</p>");
			$("#user_password_confirmation").parent().addClass('has-error');
		}else if($("#user_password_confirmation").val().trim().length > 0){
			
			 if(!($("#user_password").val() == $("#user_password_confirmation").val())){
			 	console.log($("#user_password").val()+"  "+$("#user_password_confirmation").val());
			 	$("#user_password").parent().addClass('has-error');
			 	$("#user_password_confirmation").parent().addClass('has-error');
			 	$("#user_password_confirmation").removeClass("margin-bottom-20").nextAll('p').remove();
				$("#user_password_confirmation").after("<p class='color-red'>Password Don't Match</p>");
			 	
			 }else if($("#user_password").val() == $("#user_password_confirmation").val()){
				$("#user_password").parent().removeClass('has-error');
			 	$("#user_password_confirmation").parent().removeClass('has-error');
			 	$("#user_password_confirmation").addClass("margin-bottom-20").nextAll('p').remove();
			 }
		}

	});

	$(document).on('change keyup paste',"#user_email",function(){
		if($("#user_email").val().trim().length <= 0){
			$("#user_email").addClass('margin-bottom-20').nextAll('p').remove();
			$("#user_email").parent().removeClass('has-error');
		}else{
			if(IsEmail($("#user_email").val())){

				checkEmailIfExists(function(data){
						if(data.email_exists == true){
				    		$("#user_email").removeClass("margin-bottom-20").nextAll('p').remove();
				    		$("#user_email").parent().addClass('has-error')
				    		$("#user_email").after("<p class='color-red'>Email Address is already used!</p>");
				    	}else if(data.email_exists == false){
				    		$("#user_email").addClass('margin-bottom-20').nextAll('p').remove();
				    		$("#user_email").parent().removeClass('has-error');
				    	}
				});

			}else if(!IsEmail($("#user_email").val())){
				$("#user_email").removeClass("margin-bottom-20").nextAll('p').remove();
				$("#user_email").parent().addClass('has-error')
				$("#user_email").after("<p class='color-red'>Email Address is invalid!</p>");
			}	
		}
		
	  
	});
	
	$(document).on('submit','#frm_registration',function(event){
		
		uEmail 				= $("#user_email");
		uPassword 			= $("#user_password");
		uConfirmPassword 	= $("#user_password_confirmation");
		uFirstName  		= $("#user_firstname");
		uLastName  			= $("#user_firstname");
		uContactNumber  	= $("#user_firstname");
		uOtherInformation  	= $("#user_firstname");
		
		if(uEmail.val().length <= 0 ){
			uEmail.removeClass("margin-bottom-20").nextAll('p').remove();
			uEmail.after("<p class='color-red'>Email Address empty!</p>");
			uEmail.parent().addClass('has-error');
			uEmail.focus();
			return false;
		}else if(uEmail.val().length > 0 ){
			
			if(!IsEmail(uEmail.val())){
				uEmail.removeClass("margin-bottom-20").nextAll('p').remove();
				uEmail.after("<p class='color-red'>Email Address is invalid!</p>");
				uEmail.parent().addClass('has-error')
				uEmail.focus();
				return false;
			}else if(IsEmail(uEmail.val())){
				
				if(uEmail.next('p').hasClass("color-red")){
					uEmail.focus();
					return false;
				}
				
			}
			
		}

		if(uPassword.val().trim().length <= 0){
			uPassword.removeClass("margin-bottom-20").nextAll('p').remove();
			uPassword.parent().addClass('has-error');
			uPassword.after("<p class='color-red'>Password is empty!</p>");
		   return false;
		}else if(uPassword.val().trim().length >0){
			uPassword.addClass('margin-bottom-20').nextAll('p').remove();
		}

		if(uConfirmPassword.val().length <= 0){
			uConfirmPassword.removeClass("margin-bottom-20").nextAll('p').remove();
			uConfirmPassword.after("<p>Confirm password can't be blank</p>");
			return false;
		}else if(uConfirmPassword.val().length > 0){
			
			 if(uPassword.val() !== uConfirmPassword.val()){
			 	uPassword.parent().addClass('has-error');
			 	uConfirmPassword.parent().addClass('has-error');
			 	uConfirmPassword.removeClass("margin-bottom-20").nextAll('p').remove();
				uConfirmPassword.after("<p class='color-red'>Password Don't Match</p>");
			 	uConfirmPassword.focus();
			 	return false;
			 }
		}

		if(uFirstName.val().length <= 0){
			uFirstName.parent().addClass('has-error');
			uFirstName.nextAll('p').remove();
			uFirstName.after("<p class='color-red'>First Name is empty</p>");
			return false;
		}

		if(uLastName.val().length <= 0){
			uLastName.parent().addClass('has-error');
			uLastName.nextAll('p').remove();
			uLastName.after("<p class='color-red'>Last Name is empty</p>");
			return false;
		}

		if(uContactNumber.val().length < 0){
			uContactNumber.parent().addClass('has-error');
			uContactNumber.nextAll('p').remove();
			uContactNumber.after("<p class='color-red'>Contact Number is empty</p>");
			return false;
		}
	});

	function IsEmail(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
	}
});