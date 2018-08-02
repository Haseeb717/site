class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :set_footer, :load_featureds
  include BeforeRender

  def set_footer
    @newsletter = Newsletter.new
  end

  def load_featureds
    @featureds = Featured.active.order(position: :asc).take(5)
  end
end
