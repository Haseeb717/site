class HomeController < ApplicationController
  before_filter :set_meta_tags_index, :only => :index
  before_filter :set_meta_tags_about, :only => :about
  before_filter :set_meta_tags_box_office, :only => :box_office
  before_filter :set_meta_tags_frequently_askeds, :only => :frequently_askeds
  before_filter :set_meta_tags_press, :only => :press

  def index
    #@featureds = Featured.active.order(position: :asc).take(5)
    @advertisings = Advertising.order(position: :asc).take(5)
    @events = Event.get_upcoming_events_avaliables.take(6)
    @featured_events = Event.featured_event

    #@featureds = []
    #@advertisings = []
    #@events = []
    #@featured_events = []
  end

  def about
    @sponsors = Sponsor.order(:position)
    @entrepreneurs = Entrepreneur.order(:position)
  end

  def frequently_askeds
    @frequently_askeds_by_category = Category.includes(:frequently_askeds).order(:name).map{|u| u}.uniq
  end

  def box_office
  end

  def map
  end

  def press
    @realeases = Release.order(date: :asc).page(params[:page])
  end

  private
  def set_meta_tags_index
    set_meta_tags title: 'Teatro Santander',
                  description: 'Com acesso fácil e localização privilegiada, o Teatro Santander é o mais novo palco para atrações nacionais e internacionais. Amplo e moderno, o Teatro tem capacidade para até 1.800 espectadores por evento. As atrações são um espetáculo. O espaço também.',
                  keywords: 'teatro, santander, espaço, espetáculo, novo, palco',
                  og: {
                        title: 'Teatro Santander',
                        image: view_context.image_url('og-facebook.jpg'),
                        url: request.original_url,
                        description: 'Com acesso fácil e localização privilegiada, o Teatro Santander é o mais novo palco para atrações nacionais e internacionais. Amplo e moderno, o Teatro tem capacidade para até 1.800 espectadores por evento. As atrações são um espetáculo. O espaço também.'
                      }
  end

  def set_meta_tags_about
    set_meta_tags title: 'Teatro Santander',
                  description: 'O Teatro Santander, localizado em São Paulo, é o teatro mais moderno do Brasil. Com o engajamento de empreendedores e patrocinadores, trabalhamos para o fortalecimento e acesso à cultura. Modernidade, pioneirismo, versatilidade e uma infinidade de detalhes esperam por você.',
                  keywords: 'Teatro, Santander, São Paulo, modernidade, moderno, Brasil',
                  og: {
                        title: 'Teatro Santander',
                        image: view_context.image_url('og-facebook.jpg'),
                        url: request.original_url,
                        description: 'O Teatro Santander, localizado em São Paulo, é o teatro mais moderno do Brasil. Com o engajamento de empreendedores e patrocinadores, trabalhamos para o fortalecimento e acesso à cultura. Modernidade, pioneirismo, versatilidade e uma infinidade de detalhes esperam por você.'
                      }
  end

  def set_meta_tags_press
    set_meta_tags title: 'Teatro Santander',
                  description: 'Seja bem-vindo. Aqui na Imprensa você encontra tudo sobre os eventos que estarão no palco do Teatro Santander.',
                  keywords: 'Teatro, Santander, imprensa, eventos',
                  og: {
                        title: 'Teatro Santander',
                        image: view_context.image_url('og-facebook.jpg'),
                        url: request.original_url,
                        description: 'Seja bem-vindo. Aqui na Imprensa você encontra tudo sobre os eventos que estarão no palco do Teatro Santander.'
                      }
  end

  def set_meta_tags_box_office
    set_meta_tags title: 'Teatro Santander',
                  description: 'Teatro Santander – Bilheteria Teatro Santander Complexo JK.',
                  keywords: 'Teatro, Santander, bilheteria, ingressos, horário, funcionamento',
                  og: {
                        title: 'Teatro Santander',
                        image: view_context.image_url('og-facebook.jpg'),
                        url: request.original_url,
                        description: 'Teatro Santander – Bilheteria Teatro Santander Complexo JK.'
                      }
  end
  def set_meta_tags_frequently_askeds
    set_meta_tags title: 'Teatro Santander',
                  description: 'Tire suas dúvidas e obtenha as informações que precisa através das perguntas mais frequentes sobre o Teatro Santander.',
                  keywords: 'FAQ, Teatro, Santander, perguntas, frequentes, dúvidas, informações',
                  og: {
                        title: 'Teatro Santander',
                        image: view_context.image_url('og-facebook.jpg'),
                        url: request.original_url,
                        description: 'Tire suas dúvidas e obtenha as informações que precisa através das perguntas mais frequentes sobre o Teatro Santander.'
                      }
  end
end
