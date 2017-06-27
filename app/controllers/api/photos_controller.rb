class Api::PhotosController < ApplicationController
  before_action :require_logged_in

  def index
    followee_photos = []

    followee_photos.concat(current_user.photos)

    current_user.followees.each_with_index do |followee, idx|
      followee_photos.concat(followee.photos)
    end

    @photos = followee_photos

    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find_by(id: params[:id])
    render :show
  end

  def destroy
    @photo = current_user.photos.find_by(id: params[:id])

    if @photo.destroy
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:caption, :image)
  end
end
