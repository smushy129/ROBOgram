class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def destroy
    @comment = current_user.comments.find(id: params[:id])

    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:photo_id, :body)
  end
end
