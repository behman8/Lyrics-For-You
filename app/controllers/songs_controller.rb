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
        render json: songs, include: :user
    end

    def create
        song = Song.create(song_params)
        if song
            render json: song, status: :created
        else
            render json: { errors: "Could not create song." }, status: :unprocessable_entity
        end
    end

    private

    def song_params
        params.require(:song).permit(:title, :lyrics, :artist, :time, :album, :user_id)
    end

    def find_song
        Song.find_by(id: params[:id])
    end

end
