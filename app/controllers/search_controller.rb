class SearchController < ApplicationController
  before_filter :set_meta_tags_index, :only => :index

  def index
    @search = get_search [Event]
  end

  private
  def get_search(search_for_models)
    Sunspot.search search_for_models do |query|
      query.keywords params[:term], :highlight => true
      query.order_by :score, :desc
      query.order_by :schedule, :desc if query.is_a? Event
      query.paginate(:page => params[:page] || 1, :per_page => 2)
    end
  end

  def set_meta_tags_index
    set_meta_tags title: 'Teatro Santander',
                  description: 'Busque os eventos do Teatro Santander.',
                  keywords: 'busque, Santander, evento, eventos, teatro',
                  og: {
                        title: 'Teatro Santander',
                        image: view_context.image_url('og-facebook.jpg'),
                        url: request.original_url,
                        description: 'Busque os eventos do Teatro Santander.'
                      }
  end
end
