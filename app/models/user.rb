class User < ActiveRecord::Base
	validates :terms_of_service, acceptance:{ accept:1}
	validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

	validates_presence_of :email,:password,:firstname,:lastname,:address,:phonenumber
end
