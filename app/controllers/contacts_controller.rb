class ContactsController < ApplicationController
  before_filter :set_meta_tags_index, :only => :index

  skip_before_filter :verify_authenticity_token

  def index
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      begin
        ContactMailer.contact_email(@contact).deliver
      rescue
      end
      render json: @contact
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  private
  def contact_params
    params.require(:contact).permit(:name, :email, :subject_id, :message)
  end

  def set_meta_tags_index
    set_meta_tags title: 'Teatro Santander',
                  description: 'Entre em contato com o Teatro Santader pelo telefone (11) 3333.3333 ou através do email email@teatrosantander.com.br ',
                  keywords: 'contato, telefone, Teatro, Santander, email',
                  og: {
                        title: 'Teatro Santander',
                        image: view_context.image_url('og-facebook.jpg'),
                        url: request.original_url,
                        description: 'Entre em contato com o Teatro Santader pelo telefone (11) 3333.3333 ou através do email email@teatrosantander.com.br '
                      }
  end
end
