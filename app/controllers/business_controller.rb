class BusinessController < ApplicationController
  before_filter :set_meta_tags_index, :only => :index

  skip_before_filter :verify_authenticity_token

  def index
    @business_contact = BusinessContact.new
    @partnership_contact = PartnershipContact.new
  end

  def create_bussines_contact
    @business_contact = BusinessContact.new(business_contact_params)
    if @business_contact.save
      begin
        ContactMailer.business_email(@business_contact).deliver
      rescue
      end
      render json: @business_contact
    else
      render json: @business_contact.errors, status: :unprocessable_entity
    end
  end

  def create_partnership_contact
    @partnership_contact = PartnershipContact.new(partnership_contact_params)
    if @partnership_contact.save
      begin
        ContactMailer.partnership_email(@partnership_contact).deliver
      rescue
      end
      render json: @partnership_contact
    else
      render json: @partnership_contact.errors, status: :unprocessable_entity
    end
  end

  private
  def business_contact_params
    params.require(:business_contact).permit(:kind_event_id, :company_name, :responsible_person, :email, :phone, :date, :number_participants, :observations)
  end

  def partnership_contact_params
    params.require(:partnership_contact).permit(:company_name, :responsible_person, :email, :phone,:observations)
  end

  def set_meta_tags_index
    set_meta_tags title: 'Teatro Santander',
                  description: 'Realize seu evento no Teatro Santander.',
                  keywords: 'Teatro, Santander, evento, realização, realize',
                  og: {
                        title: 'Teatro Santander',
                        image: view_context.image_url('og-facebook.jpg'),
                        url: request.original_url,
                        description: 'Realize seu evento no Teatro Santander.'
                      }
  end
end
