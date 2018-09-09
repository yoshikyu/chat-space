class LikesController < ApplicationController
  def create
  	Like.create(message_id: params[:message_id], user_id: current_user.id)
  	@like = Like.find_by(message_id: params[:message_id], user_id: current_user.id)
  	respond_to do |format|
  		format.html
  		format.json{@like}
  	end
  end

  def destroy
  	@like = Like.find_by(message_id: params[:id], user_id: current_user.id)
  	@like.destroy
	  respond_to do |format|
		  format.html
		  format.json{@like}
  	end
  end
end 
