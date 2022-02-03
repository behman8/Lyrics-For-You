class SongsController < ApplicationController

    def show
        song = find_song
        if song
            render json: song, include: :user, status: :ok
        else
            render json: {errors: "Song does not exist."}, status: :not_found
        end
    end

    def index
        songs = Song.all
        render json: songs
    end

    private

    def find_song
        Song.find_by(id: params[:id])
    end

end
