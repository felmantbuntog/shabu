class User < ActiveRecord::Base
	validates :terms_of_service, :acceptance => true
end
