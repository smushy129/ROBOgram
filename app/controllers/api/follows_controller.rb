class Api:FollowsController < ApplicationController
  def index

  end

  def create
    @follow = Follow.new(followee_id: params[:user_id])
    @follow.follower_id = current_user.id

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.followees.find_by(followee_id: params[:user_id])

    if @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end
end
