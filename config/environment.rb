# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.raise_delivery_errors = true
ActionMailer::Base.default :content_type => "text/html"
ActionMailer::Base.delivery_method = :smtp

ActionMailer::Base.smtp_settings = {
  :address => "smtp.gmail.com",
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true,
  :domain => "gmail.com",
  :user_name => "santanderteatro@gmail.com",
  :password => "teatro@2017"
}

#ActionMailer::Base.smtp_settings = {
#  :user_name => 'lucasteles22@gmail.com',
#  :password => 'o6LzwNCHhAMaY7xvXh_rgg',
#  :address => 'smtp.mandrillapp.com',
#  :port => 587,
#  :authentication => :plain,
#  :enable_starttls_auto => true
#}

