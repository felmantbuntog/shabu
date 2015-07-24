class UsersController < ApplicationController
    def index

    end

  	def new
  		@user = User.new
  	end

  	def create
  		@user = User.new(user_params)
        respond_to do |format|
       		if @user.save
            format.html { redirect_to root_path, success: 'Registration successfull.' }
            format.json { render :show, status: :created, location: @user }
       		else
            format.html { render :new }
            format.json { render json: @user.errors, status: :unprocessable_entity }
       		end
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
