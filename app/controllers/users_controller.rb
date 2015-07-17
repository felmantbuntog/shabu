class UsersController < ApplicationController
	def index

  end

	def create
<<<<<<< HEAD

=======
		@user = User.new(user_params)	
 		@user.save
 		redirect_to root_url
	end
	def edit
  end

	private

	def user_params
		 params.require(:user).permit(:email, :password, :firstname, :lastname, :address, :phonenumber)
>>>>>>> 987984eea159c1c7f10603730bd5a1b58e38f822
	end
end
