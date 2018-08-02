RailsAdmin.config do |config|
  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :admin
  end
  config.current_user_method(&:current_admin)

  config.label_methods.unshift(:display_name)
  config.excluded_models = ["Ckeditor::Asset", "Ckeditor::AttachmentFile", "Ckeditor::Picture"]

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app
    nestable
  end
end

### monkey pactch for unscoped search
require 'rails_admin/main_controller'
module RailsAdmin
  class MainController
    alias_method :old_get_collection, :get_collection
    alias_method :old_get_object, :get_object

    def get_collection(model_config, _scope, pagination)
      old_get_collection(model_config, model_config.abstract_model.model.unscoped, pagination)
    end

    def get_object
      raise RailsAdmin::ObjectNotFound unless (object = @abstract_model.model.unscoped.find(params[:id]))
      @object = RailsAdmin::Adapters::ActiveRecord::AbstractObject.new(object)
    end
  end
end
### monkey pactch for unscoped search```
