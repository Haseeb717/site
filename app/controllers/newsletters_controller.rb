class NewslettersController < ApplicationController
  def create
    @newsletter = Newsletter.new(newsletter_params)
    if @newsletter.save
      render json: @newsletter
    else
      render json: @newsletter.errors, status: :unprocessable_entity
    end
  end

  private
  def newsletter_params
    params.require(:newsletter).permit(:email)
  end
end
