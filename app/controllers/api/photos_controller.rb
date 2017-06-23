class Api::PhotosController < ApplicationController
  before_action :require_logged_in

  def index
    @photos = Photo.all
    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render :index
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def destroy
    @photo = current_user.photos.find(params[:id])

    if @photo.destroy
      render "/api/users/show/#{current_user.id}"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:caption, :image, :user_id)
  end
end
