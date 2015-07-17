class UsersController < ApplicationController
	
	def create
		@user = User.new(user_params)	
 		if @user.save
 			redirect_to root_url
 		else
 			render 'new'
 		end

 		
	end
	def edit
    end

	private

	def user_params
		 params.require(:user).permit(:email, :password, :firstname, :lastname, :address, :phonenumber)
	end
end
