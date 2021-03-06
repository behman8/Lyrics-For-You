class UsersController < ApplicationController

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, include: :songs, status: :ok
        else
            render json: { errors: "Not authorized."}, status: :unauthorized
        end
    end

    def index
        users = User.all
        render json: users, include: :songs
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
