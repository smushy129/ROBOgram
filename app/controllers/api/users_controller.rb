class Api::UsersController < ApplicationController
	def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

  def index
    if params[:users]
      @users = User
        .where('username ILIKE ? OR name ILIKE ?', "%#{params[:users]}%", "%#{params[:users]}%" ).all
    else
      @users = User.all
    end

  end

  def update
    @user = User.find_by_id(current_user.id)

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      @photos = @user.photos.order('photos.created_at DESC')
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

	private

	def user_params
		params.require(:user).permit(:username, :password, :name, :bio, :website, :avatar)
	end

end
