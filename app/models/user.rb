class User < ActiveRecord::Base
	 validates :terms_of_service, acceptance:{ :accept => '0'}
	 validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
 	 validates :email, :presence => true, :uniqueness => true
	 validates_presence_of :email,:password,:firstname,:lastname,:address,:phonenumber
	 has_many :products

	def self.search(email)
		if email
			where('email = ?',email).first
		end

	end
end
