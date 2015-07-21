class HomeController < ApplicationController
  def index
    @categories = Category.all
  end
  #i was here
end
