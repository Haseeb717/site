module ApplicationHelper
  def get_range_of_event_dates(item)
    begin
      if item.earliest_date == item.most_date
        return "#{l item.earliest_date, format: '%d de %B'}"
      else
        return "#{l item.earliest_date, format: '%d de %B'} a #{l item.most_date, format: '%d de %B'}"
      end
    rescue
      return "Não disponível"
    end
  end

  def get_range_of_previous_event_dates(item)
    begin
      if !item.date_end.nil?
        return "#{l item.date_start, format: '%d de %B'} a #{l item.date_end, format: '%d de %B'}"
      else
        return "#{l item.date_start, format: '%d de %B'}"
      end
    rescue
      return "Não disponível"
    end
  end

  def get_simple_range_event_dates(item)
    begin
      if item.earliest_date == item.most_date
        return "Dia #{l item.earliest_date, format: '%d/%m'}"
      else
        return "#{l item.earliest_date, format: '%d/%m'} a #{l item.most_date, format: '%d/%m'}"
      end
    rescue
      return "Não disponível"
    end
  end

  def get_first_event_date(item)
    begin
        return "#{l item.earliest_date, format: '%d/%m'}"
    rescue
      return "Não disponível"
    end
  end

  def show_icon_larger
    if params[:controller] == 'home' && params[:action] == 'index'
      'icon-larger'
    end
  end

  def get_string_slugged(str)
    unless str.nil?
      str.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
    end
  end

  def top_know_more
    "top_know_more"
  end

  def top_title
    "destaque-title-top"
  end
end
