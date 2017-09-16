class Api::PhotosController < ApplicationController
  before_action :require_logged_in

  def index
    followee_photos = []
    user = User.where(id: current_user.id)
      .includes(photos: [:likes, :user, comments: [:user]])
      .first

    followee_photos << user.photos
    followee_ids = current_user.followees.ids

    followees = User.where(id: followee_ids)
      .includes(photos: [:likes, :user, comments: [:user]])

    followee_photos << followees.map(&:photos)
    @photos = followee_photos.flatten

    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render :show
    else
      render(
        json: ["Upload failed. File size must be under 5 MB"],
        status: 422
      )
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
