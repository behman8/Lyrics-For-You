class FavoritesController < ApplicationController

    def show
        favorite = find_favorite
        if favorite
            render json: favorite, status: :ok, include: :song, include: :user
        else
            render json: { errors: "Favorite does not exist" }, status: :not_found
        end
    end

    def index
        favorites = Favorite.all
        render json: favorites, include: :user, include: :song
    end

    def create
        favorite = Favorite.create(favorite_params)
        if favorite
            render json: favorite, include: :song, status: :created
        else
            render json: { errors: "Could not create favorite." }, status: :unprocessable_entity
        end
    end

    def destroy
        favorite = find_favorite
        if favorite
            favorite.destroy
            head :no_content
        else
            render json: { errors: "Favorite does not exist." }, status: :not_found
        end
    end

    private

    def find_favorite
        Favorite.find_by(id: params[:id])
    end

    def favorite_params
        params.require(:favorite).permit(:user_id, :song_id)
    end

end
