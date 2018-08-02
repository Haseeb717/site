require "open-uri"

# Administradores
Admin.create(email: 'claudiney.veloso@planb.com.br', password: "lucas123")

# Patrocionadores
Sponsor.find_or_create_by(:name => 'Banco Santander') do |item|
    item.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    item.url = 'https://www.santander.com.br'
    item.position = 1
    item.icon = File.new("#{Rails.root}/app/assets/images/about/logo-santander-white.png")
    item.image = File.new("#{Rails.root}/app/assets/images/about/patrocinador1.jpg")
end
Sponsor.find_or_create_by(:name => 'Zurich Santander') do |item|
    item.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    item.url = 'http://www.zurich.com.br'
    item.position = 2
    item.icon = File.new("#{Rails.root}/app/assets/images/about/logo-zurich-white.png")
    item.image = File.new("#{Rails.root}/app/assets/images/about/patrocinador2.jpg")
end
Sponsor.find_or_create_by(:name => 'Johnson & Johnson') do |item|
    item.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    item.url = 'https://www.jnjbrasil.com.br'
    item.position = 3
    item.icon = File.new("#{Rails.root}/app/assets/images/about/logo-johnson.png")
    item.image = File.new("#{Rails.root}/app/assets/images/about/patrocinador3.jpg")
end

# Empreendedores
Entrepreneur.find_or_create_by(:name => 'Banco Santander') do |item|
    item.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    item.url = 'https://www.santander.com.br'
    item.position = 1
    item.icon = File.new("#{Rails.root}/app/assets/images/about/logo-santander-white.png")
    item.image = File.new("#{Rails.root}/app/assets/images/about/patrocinador1.jpg")
end
Entrepreneur.find_or_create_by(:name => 'Zurich Santander') do |item|
    item.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    item.url = 'http://www.zurich.com.br'
    item.position = 2
    item.icon = File.new("#{Rails.root}/app/assets/images/about/logo-zurich-white.png")
    item.image = File.new("#{Rails.root}/app/assets/images/about/patrocinador2.jpg")
end
Entrepreneur.find_or_create_by(:name => 'Johnson & Johnson') do |item|
    item.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    item.url = 'https://www.jnjbrasil.com.br'
    item.position = 3
    item.icon = File.new("#{Rails.root}/app/assets/images/about/logo-johnson.png")
    item.image = File.new("#{Rails.root}/app/assets/images/about/patrocinador3.jpg")
end

# Assuntos contatos
Subject.find_or_create_by(:name => 'Compra de ingressos') do |item|
  item.email_redirection = 'claudiney.veloso@planb.com.br'
end
Subject.find_or_create_by(:name => 'Meia-entrada e descontos') do |item|
  item.email_redirection = 'claudiney.veloso@planb.com.br'
end
Subject.find_or_create_by(:name => 'Taxa de conveniência') do |item|
  item.email_redirection = 'claudiney.veloso@planb.com.br'
end
Subject.find_or_create_by(:name => 'Retirada ou entrega de ingressos') do |item|
  item.email_redirection = 'claudiney.veloso@planb.com.brclaudiney.veloso@planb.com.br'
end
Subject.find_or_create_by(:name => 'Cancelamento de evento') do |item|
  item.email_redirection = 'claudiney.veloso@planb.com.br'
end
Subject.find_or_create_by(:name => 'Arrependimento / Devolução') do |item|
  item.email_redirection = 'claudiney.veloso@planb.com.br'
end
Subject.find_or_create_by(:name => 'Troca de sessão / Espetáculo / Assentos ou setores') do |item|
  item.email_redirection = 'claudiney.veloso@planb.com.br'
end
Subject.find_or_create_by(:name => 'Restrições e proibições') do |item|
  item.email_redirection = 'claudiney.veloso@planb.com.br'
end

# Classificação etária
AgeRating.find_or_create_by(:name => 'Livre') do |item|
  item.icon = File.new("#{Rails.root}/app/assets/images/seed/age_rating/livre.png")
end
AgeRating.find_or_create_by(:name => 'Não recomendado para menores de dez anos') do |item|
  item.icon = File.new("#{Rails.root}/app/assets/images/seed/age_rating/10_anos.png")
end
AgeRating.find_or_create_by(:name => 'Não recomendado para menores de doze anos') do |item|
  item.icon = File.new("#{Rails.root}/app/assets/images/seed/age_rating/12_anos.png")
end
AgeRating.find_or_create_by(:name => 'Não recomendado para menores de catorze anos') do |item|
  item.icon = File.new("#{Rails.root}/app/assets/images/seed/age_rating/14_anos.png")
end
AgeRating.find_or_create_by(:name => 'Não recomendado para menores de dezesseis anos') do |item|
  item.icon = File.new("#{Rails.root}/app/assets/images/seed/age_rating/16_anos.png")
end
AgeRating.find_or_create_by(:name => 'Não recomendado para menores de dezoito anos') do |item|
  item.icon = File.new("#{Rails.root}/app/assets/images/seed/age_rating/18_anos.png")
end

# Gênero
Genre.find_or_create_by!(:name => 'Musical')
Genre.find_or_create_by(:name => 'Show')
Genre.find_or_create_by(:name => 'Palestra')
Genre.find_or_create_by(:name => 'Orquestra')
Genre.find_or_create_by(:name => 'Teatro')

# Propaganda home
Advertising.find_or_create_by(:title => 'Infraestrutura') do |item|
  item.subtitle = 'Com 8.000m², o Teatro Santander abriga o que há de mais moderno em termos de espetáculo. As atrações se apresentam em um palco de 400m², boca de cena de 14 metros de altura e 56 varas cenográficas motorizadas.'
  item.url = 'http://teatrosantander.com.br'
  item.position = 1
end

Advertising.find_or_create_by(:title => 'Acessibilidade') do |item|
  item.subtitle = 'O acesso à cultura é um direito de todo cidadão. Para garantir que os espetáculos sejam assistidos por todos, o Teatro Santander possui 16 assentos para deficientes físicos e 10 para pessoas obesas.'
  item.url = 'http://teatrosantander.com.br'
  item.position = 2
end

Advertising.find_or_create_by(:title => 'Conforto') do |item|
  item.subtitle = 'O projeto é assinado pelo escritório norte-americano Eskew+Dumez+Ripple, com fachada do Edo Rocha Arquiteturas.'
  item.url = 'http://teatrosantander.com.br'
  item.position = 3
end

Advertising.find_or_create_by(:title => 'Design') do |item|
  item.subtitle = 'A sala principal do Teatro Santander recebe até 1.200 espectadores sentados. Caso as poltronas sejam recolhidas, esse número aumenta, podendo receber até 1.800 no total.'
  item.url = 'http://teatrosantander.com.br'
  item.position = 4
end

Advertising.find_or_create_by(:title => 'Estrutura') do |item|
  item.subtitle = 'A sala principal do Teatro Santander recebe até 1.200 espectadores sentados. Caso as poltronas sejam recolhidas, esse número aumenta, podendo receber até 1.800 no total.'
  item.url = 'http://teatrosantander.com.br'
  item.position = 5
end

# Tipo de evento - contatos empresariais
KindEvent.find_or_create_by(:name => 'Convenção')
KindEvent.find_or_create_by(:name => 'Desfile')
KindEvent.find_or_create_by(:name => 'Exposição')
KindEvent.find_or_create_by(:name => 'Feira')
KindEvent.find_or_create_by(:name => 'Musical')
KindEvent.find_or_create_by(:name => 'Palestra')
KindEvent.find_or_create_by(:name => 'Show')
KindEvent.find_or_create_by(:name => 'Teatro')

# SOMENTE DESENVOLVIMENTO
if Rails.env == "development"
  # Eventos
  Event.find_or_create_by(:title => 'Onqotô') do |item|
    item.subtitle = Faker::Name.title
    item.description = Faker::Lorem.paragraph(20, true, 20)
    item.price_ticket = Faker::Lorem.paragraph(20, true, 20)
    item.advice = Faker::Lorem.paragraph(10, true, 10)
    item.summary_session = '<p>Quintas e Sextas, &agrave;s&nbsp;<strong>21h.</strong>&nbsp;<br />S&aacute;bados, &agrave;s&nbsp;<strong>17h e 21h.</strong>&nbsp;<br />Domingos, &agrave;s&nbsp;<strong>16h e 20h.</strong></p>'
    item.duration = '60 minutos'
    item.age_rating_id = 1
    item.genre_id = 2
    item.published = true
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento1.jpg")
    item.map = File.new("#{Rails.root}/app/assets/images/programacao/interna/mapa.png")
  end
  Event.find_or_create_by(:title => 'Bachiana Filarmônica') do |item|
    item.subtitle = Faker::Name.title
    item.description = Faker::Lorem.paragraph(20, true, 20)
    item.price_ticket = Faker::Lorem.paragraph(20, true, 20)
    item.advice = Faker::Lorem.paragraph(10, true, 10)
    item.summary_session = '<p>Quintas e Sextas, &agrave;s&nbsp;<strong>21h.</strong>&nbsp;<br />S&aacute;bados, &agrave;s&nbsp;<strong>17h e 21h.</strong>&nbsp;<br />Domingos, &agrave;s&nbsp;<strong>16h e 20h.</strong></p>'
    item.duration = '120 minutos'
    item.age_rating_id = 2
    item.genre_id = 4
    item.published = true
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento2.jpg")
    item.map = File.new("#{Rails.root}/app/assets/images/programacao/interna/mapa.png")
  end
  Event.find_or_create_by(:title => 'Ato e Efeito') do |item|
    item.subtitle = Faker::Name.title
    item.description = Faker::Lorem.paragraph(20, true, 20)
    item.price_ticket = Faker::Lorem.paragraph(20, true, 20)
    item.advice = Faker::Lorem.paragraph(10, true, 10)
    item.summary_session = '<p>Quintas e Sextas, &agrave;s&nbsp;<strong>21h.</strong>&nbsp;<br />S&aacute;bados, &agrave;s&nbsp;<strong>17h e 21h.</strong>&nbsp;<br />Domingos, &agrave;s&nbsp;<strong>16h e 20h.</strong></p>'
    item.duration = '240 minutos'
    item.age_rating_id = 3
    item.genre_id = 5
    item.published = true
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento3.jpg")
    item.map = File.new("#{Rails.root}/app/assets/images/programacao/interna/mapa.png")
  end
  Event.find_or_create_by(:title => 'Jake Bugg') do |item|
    item.subtitle = Faker::Name.title
    item.description = Faker::Lorem.paragraph(20, true, 20)
    item.price_ticket = Faker::Lorem.paragraph(20, true, 20)
    item.advice = Faker::Lorem.paragraph(10, true, 10)
    item.summary_session = '<p>Quintas e Sextas, &agrave;s&nbsp;<strong>21h.</strong>&nbsp;<br />S&aacute;bados, &agrave;s&nbsp;<strong>17h e 21h.</strong>&nbsp;<br />Domingos, &agrave;s&nbsp;<strong>16h e 20h.</strong></p>'
    item.duration = '120 minutos'
    item.age_rating_id = 4
    item.genre_id = 2
    item.published = true
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento4.jpg")
    item.map = File.new("#{Rails.root}/app/assets/images/programacao/interna/mapa.png")
  end
  Event.find_or_create_by(:title => 'Grande show We Will Rock you') do |item|
    item.subtitle = Faker::Name.title
    item.description = Faker::Lorem.paragraph(20, true, 20)
    item.price_ticket = Faker::Lorem.paragraph(20, true, 20)
    item.advice = Faker::Lorem.paragraph(10, true, 10)
    item.summary_session = '<p>Quintas e Sextas, &agrave;s&nbsp;<strong>21h.</strong>&nbsp;<br />S&aacute;bados, &agrave;s&nbsp;<strong>17h e 21h.</strong>&nbsp;<br />Domingos, &agrave;s&nbsp;<strong>16h e 20h.</strong></p>'
    item.duration = '120 minutos'
    item.age_rating_id = 5
    item.genre_id = 1
    item.published = true
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento5.jpg")
    item.map = File.new("#{Rails.root}/app/assets/images/programacao/interna/mapa.png")
  end
  Event.find_or_create_by(:title => 'Masterclass') do |item|
    item.subtitle = Faker::Name.title
    item.description = Faker::Lorem.paragraph(20, true, 20)
    item.price_ticket = Faker::Lorem.paragraph(20, true, 20)
    item.advice = Faker::Lorem.paragraph(10, true, 10)
    item.summary_session = '<p>Quintas e Sextas, &agrave;s&nbsp;<strong>21h.</strong>&nbsp;<br />S&aacute;bados, &agrave;s&nbsp;<strong>17h e 21h.</strong>&nbsp;<br />Domingos, &agrave;s&nbsp;<strong>16h e 20h.</strong></p>'
    item.duration = '120 minutos'
    item.age_rating_id = 6
    item.genre_id = 3
    item.published = true
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento6.jpg")
    item.map = File.new("#{Rails.root}/app/assets/images/programacao/interna/mapa.png")
  end

  PreviousEvent.find_or_create_by(:title => 'Grande show') do |item|
    item.short_description = Faker::Lorem.paragraph(2, true)
    item.description = Faker::Lorem.paragraph(10, true, 10)
    item.informations = '<p>Quintas e Sextas, &agrave;s&nbsp;<strong>21h.</strong>&nbsp;<br />S&aacute;bados, &agrave;s&nbsp;<strong>17h e 21h.</strong>&nbsp;<br />Domingos, &agrave;s&nbsp;<strong>16h e 20h.</strong></p>'
    item.genre_id = 2
    item.published = true
    item.date_start = Date.new(2016, 3, 25)
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento4.jpg")
  end


  PreviousEvent.find_or_create_by(:title => 'Grande show We Will Rock you Anterior') do |item|
    item.short_description = Faker::Lorem.paragraph(2, true)
    item.description = Faker::Lorem.paragraph(10, true, 10)
    item.informations = '<p>Quintas e Sextas, &agrave;s&nbsp;<strong>21h.</strong>&nbsp;<br />S&aacute;bados, &agrave;s&nbsp;<strong>17h e 21h.</strong>&nbsp;<br />Domingos, &agrave;s&nbsp;<strong>16h e 20h.</strong></p>'
    item.genre_id = 1
    item.published = true
    item.date_start = Date.new(2016, 3, 25)
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento5.jpg")
  end


  PreviousEvent.find_or_create_by(:title => 'Masterclass Anterior') do |item|
    item.short_description = Faker::Lorem.paragraph(2, true)
    item.description = Faker::Lorem.paragraph(10, true, 10)
    item.informations = '<p>Quintas e Sextas, &agrave;s&nbsp;<strong>21h.</strong>&nbsp;<br />S&aacute;bados, &agrave;s&nbsp;<strong>17h e 21h.</strong>&nbsp;<br />Domingos, &agrave;s&nbsp;<strong>16h e 20h.</strong></p>'
    item.genre_id = 3
    item.published = true
    item.date_start = Date.new(2016, 3, 25)
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento6.jpg")
  end

  PreviousEventsImage.create do |item|
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento6.jpg")
    item.previous_event_id = 2
  end

  PreviousEventsImage.create do |item|
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento5.jpg")
    item.previous_event_id = 2
  end

  PreviousEventsImage.create do |item|
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento4.jpg")
    item.previous_event_id = 2
  end

  PreviousEventsImage.create do |item|
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento3.jpg")
    item.previous_event_id = 2
  end

  PreviousEventsImage.create do |item|
    item.image = File.new("#{Rails.root}/app/assets/images/programacao/interna/evento2.jpg")
    item.previous_event_id = 2
  end

  if SalesChannel.all.empty?
    # Canal de venda
    SalesChannel.create do |item|
      item.event_id = 1
      item.name = 'Ingresso Rápido'
      item.url = 'https://www.ingressorapido.com.br/'
    end
    SalesChannel.create do |item|
      item.event_id = 1
      item.name = 'Entretix'
      item.url = 'https://www.entretix.com.br/we-will-rock-you.shtml'
    end
    SalesChannel.create do |item|
      item.event_id = 2
      item.name = 'Ingresso Rápido'
      item.url = 'https://www.ingressorapido.com.br/'
    end
  end

  # Agenda
  if Schedule.all.empty?
    Schedule.create do |item|
      item.event_id = 6
      item.date = Date.new(2016, 3, 25)
    end
    Schedule.create do |item|
      item.event_id = 6
      item.date = Date.new(2016, 3, 30)
    end
    Schedule.create do |item|
      item.event_id = 1
      item.date = Date.new(2016, 3, 29)
    end
    Schedule.create do |item|
      item.event_id = 1
      item.date = Date.new(2016, 3, 30)
    end
    Schedule.create do |item|
      item.event_id = 2
      item.date = Date.new(2016, 3, 29)
    end
    Schedule.create do |item|
      item.event_id = 3
      item.date = Date.new(2016, 3, 30)
    end
    Schedule.create do |item|
      item.event_id = 5
      item.date = Date.new(2016, 3, 31)
    end
    Schedule.create do |item|
      item.event_id = 5
      item.date = Date.new(2016, 3, 23)
    end
    Schedule.create do |item|
      item.event_id = 4
      item.date = Date.new(2016, 3, 26)
    end
  end

  if Session.all.empty?
    # Sessão / Horário
    Session.create do |item|
      item.schedule_id = 1
      item.time = Time.new(2016, 1, 1, 14)
    end
    Session.create do |item|
      item.schedule_id = 1
      item.time = Time.new(2016, 1, 1, 18)
    end
    Session.create do |item|
      item.schedule_id = 1
      item.time = Time.new(2016, 1, 1, 22)
    end
    Session.create do |item|
      item.schedule_id = 3
      item.time = Time.new(2016, 1, 1, 22)
    end
    Session.create do |item|
      item.schedule_id = 6
      item.time = Time.new(2016, 1, 1, 18)
    end
    Session.create do |item|
      item.schedule_id = 8
      item.time = Time.new(2016, 1, 1, 18)
    end
    Session.create do |item|
      item.schedule_id = 9
      item.time = Time.new(2016, 1, 1, 18)
    end
  end

  # Destaques Home
  Featured.find_or_create_by(:title => 'We Will Rock You') do |item|
    item.subtitle = Faker::Lorem.paragraph
    item.description_date = ''
    item.image = File.new("#{Rails.root}/app/assets/images/home/slider-1.jpg")
    item.url = 'http://teatrosantander.com.br/'
    item.target_blank = true
    item.position = 1
  end

  Featured.find_or_create_by(:title => 'Ballet Cisne Negro') do |item|
    item.subtitle = Faker::Lorem.paragraph
    item.description_date = '17 de Março | Terça 19h'
    item.image = File.new("#{Rails.root}/app/assets/images/home/slider-2.jpg")
    item.url = 'http://teatrosantander.com.br/'
    item.target_blank = false
    item.position = 2
  end

  Featured.find_or_create_by(:title => 'Jake Bugg') do |item|
    item.subtitle = Faker::Lorem.paragraph
    item.description_date = ''
    item.image = File.new("#{Rails.root}/app/assets/images/home/slider-3.jpg")
    item.url = 'http://teatrosantander.com.br/'
    item.target_blank = true
    item.position = 3
  end

  Featured.find_or_create_by(:title => 'Onqotô') do |item|
    item.subtitle = Faker::Lorem.paragraph
    item.description_date = 'Estreia 24 de Março | Terça - Domingo 19h'
    item.image = File.new("#{Rails.root}/app/assets/images/home/slider-4.jpg")
    item.url = 'http://teatrosantander.com.br/'
    item.target_blank = false
    item.position = 4
  end

  # Categoria / Perguntas Frequentes
  Category.find_or_create_by(:name => 'Taxa de conveniência')
  Category.find_or_create_by(:name => 'Cancelamento')
  Category.find_or_create_by(:name => 'Restrições e proibições')
  Category.find_or_create_by(:name => 'Locação do Teatro')
  Category.find_or_create_by(:name => 'Infraestrutura')

  # Perguntas frequentes
  if FrequentlyAsked.all.empty?
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.first.id
      item.position = 1
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.first.id
      item.position = 2
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.first.id
      item.position = 3
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.second.id
      item.position = 4
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.second.id
      item.position = 5
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.third.id
      item.position = 6
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.fourth.id
      item.position = 7
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.fourth.id
      item.position = 8
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.fourth.id
      item.position = 9
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.fourth.id
      item.position = 10
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.fourth.id
      item.position = 11
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.fifth.id
      item.position = 12
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.fifth.id
      item.position = 13
    end
    FrequentlyAsked.create do |item|
      item.question = Faker::Lorem.paragraph
      item.answer = Faker::Lorem.paragraph(20, true, 20)
      item.category_id = Category.fifth.id
      item.position = 14
    end
  end
end
