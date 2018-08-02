class EventsController < ApplicationController
  before_filter :set_calendar
  before_filter :set_meta_tags_index, :only => :index
  before_render :set_meta_tags_show, :only => :show

  def index
    @events = Event.includes(:genre).get_upcoming_events_avaliables.page(params[:page])
  end

  def show
    @event = Event.find(params[:slug])
  end

  def set_calendar
    @schedules = Schedule.includes(:event).includes(:sessions).where('DATE(date) >= ?', Time.zone.today).order(:date).map{ |u| u if u.sessions.present?}.compact.uniq
  end


  private
  def set_meta_tags_index
    set_meta_tags title: 'Teatro Santander',
                  description: 'Conheça detalhes da programação completa do Teatro Santander.',
                  keywords: 'programação, detalhes, completa, Teatro, Santander',
                  og: {
                        title: 'Teatro Santander',
                        image: view_context.image_url('og-facebook.jpg'),
                        url: request.original_url,
                        description: 'Conheça detalhes da programação completa do Teatro Santander.'
                      }
  end
  def set_meta_tags_show
    description = ActionView::Base.full_sanitizer.sanitize(@event.description).truncate(150, :omission => '...', :separator => ' ')
    set_meta_tags title: @event.title,
                  description: description,
                  keywords: 'teatro, santander, espaço, espetáculo, novo, palco',
                  og: {
                        title: @event.title,
                        image: request.base_url + @event.image.url,
                        url: request.original_url,
                        description: description
                      }
  end

end
