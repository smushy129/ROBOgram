class Api::FollowsController < ApplicationController
  def index

  end

  def create
    @follow = Follow.new(followee_id: params[:followee_id])
    @follow.follower_id = current_user.id

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.follows_as_follower.find_by_followee_id(params[:id])

    if @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end
end
