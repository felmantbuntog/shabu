class UsersController < ApplicationController
    def index

    end
	
	def new 
		@user = User.new
	end

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
  	def emailcheck
  		@user = User.search(params[:email])
  		respond_to do |format|
  			format.json {render :json => {email_exists: @user.present?}}
  		end 
  	end
	private

	def user_params
		 params.require(:user).permit(:email, :password, :firstname, :lastname, :address, :phonenumber)
	end
end
