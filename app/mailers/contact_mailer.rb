class ContactMailer < ApplicationMailer
  def contact_email(contact)
    @contact = contact
    # Destinatário definido em config/{environment}.rb
    mail(to: @contact.subject.email_redirection , subject: 'Contato - Teatro Santander',
      reply_to: @contact.email, from: "Teatro Santander<santanderteatro@gmail.com>")
  end

  def business_email(business_contact)
    @business_contact = business_contact
    # Destinatário definido em config/{environment}.rb
    mail(to: 'eventos@teatrosantander.com.br' , subject: 'Contato Comercial (Evento) - Teatro Santander',
    reply_to: @business_contact.email, from: "Teatro Santander<santanderteatro@gmail.com>")

  end

  def partnership_email(partnership_contact)
    @partnership_contact = partnership_contact
    # Destinatário definido em config/{environment}.rb
    mail(to: 'eventos@teatrosantander.com.br' , subject: 'Contato Comercial (Parceria) - Teatro Santander',
      reply_to: @partnership_contact.email, from: "Teatro Santander<santanderteatro@gmail.com>")
  end

end



