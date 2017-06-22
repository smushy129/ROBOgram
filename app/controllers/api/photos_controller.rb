class Api::PhotosController < ApplicationController
  def index
    @photos = current_user.photos
  end

  def create

  end

  def show

  end

  def destroy

  end

  private
  def photo_params
    params.require(:photo).permit(:caption, :image, :user_id)
  end
end
