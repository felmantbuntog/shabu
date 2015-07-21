class UsersController < ApplicationController
	def index

  end

	def create
		@user = User.new(user_params)
 		@user.save
 		redirect_to root_url
	end

	def edit
  end

	private

	def user_params
		 params.require(:user).permit(:email, :password, :firstname, :lastname, :address, :phonenumber)
	end
end
