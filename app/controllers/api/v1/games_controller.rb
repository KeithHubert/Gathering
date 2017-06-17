class Api::V1::GamesController < Api::V1::BaseController

  def index
    recentgames = Game.order(created_at: :desc).limit(5)
    render json: recentgames
  end

  def show
    game = Game.find(params[:id])
    render json: game, user: current_user
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    game = Game.new(parsed)
    game.creator = current_user

    if game.save!
      render json: game
    end
  end

  def destroy
    @game = Game.find(params[:id])
    @game.destroy
  end

end
