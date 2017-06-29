class Api::LikesController < ApplicationController
  before_action :require_logged_in

  def create
    @like = Like.new(photo_id: params[:photo_id])
    @like.user_id = current_user.id

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find_by(photo_id: params[:id])

    if @like.destroy
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

end
