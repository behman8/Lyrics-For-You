class SongsController < ApplicationController

    def show

    end

    def index
        songs = Song.all
        render json: songs
    end

end
