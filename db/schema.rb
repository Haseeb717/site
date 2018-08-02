# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180305214615) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "admins", ["email"], name: "index_admins_on_email", unique: true, using: :btree
  add_index "admins", ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true, using: :btree

  create_table "advertisings", force: :cascade do |t|
    t.string   "title"
    t.string   "subtitle",   limit: 400
    t.string   "url"
    t.integer  "position"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "age_ratings", force: :cascade do |t|
    t.string   "name",              limit: 300
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.string   "icon_file_name"
    t.string   "icon_content_type"
    t.integer  "icon_file_size"
    t.datetime "icon_updated_at"
  end

  create_table "business_contacts", force: :cascade do |t|
    t.integer  "kind_event_id"
    t.string   "company_name"
    t.string   "responsible_person"
    t.string   "email"
    t.string   "phone"
    t.date     "date"
    t.string   "number_participants"
    t.text     "observations"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  add_index "business_contacts", ["kind_event_id"], name: "index_business_contacts_on_kind_event_id", using: :btree

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ckeditor_assets", force: :cascade do |t|
    t.string   "data_file_name",               null: false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.integer  "assetable_id"
    t.string   "assetable_type",    limit: 30
    t.string   "type",              limit: 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ckeditor_assets", ["assetable_type", "assetable_id"], name: "idx_ckeditor_assetable", using: :btree
  add_index "ckeditor_assets", ["assetable_type", "type", "assetable_id"], name: "idx_ckeditor_assetable_type", using: :btree

  create_table "contacts", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "message",    limit: 1000
    t.integer  "subject_id"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "contacts", ["subject_id"], name: "index_contacts_on_subject_id", using: :btree

  create_table "entrepreneurs", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "url"
    t.integer  "position"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "icon_file_name"
    t.string   "icon_content_type"
    t.integer  "icon_file_size"
    t.datetime "icon_updated_at"
  end

  create_table "events", force: :cascade do |t|
    t.string   "title"
    t.string   "subtitle"
    t.string   "duration",           limit: 100
    t.text     "price_ticket"
    t.text     "advice"
    t.string   "slug"
    t.text     "description"
    t.text     "summary_session"
    t.boolean  "published"
    t.integer  "age_rating_id"
    t.integer  "genre_id"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "map_file_name"
    t.string   "map_content_type"
    t.integer  "map_file_size"
    t.datetime "map_updated_at"
    t.string   "date_featured"
  end

  add_index "events", ["age_rating_id"], name: "index_events_on_age_rating_id", using: :btree
  add_index "events", ["genre_id"], name: "index_events_on_genre_id", using: :btree
  add_index "events", ["slug"], name: "index_events_on_slug", unique: true, using: :btree

  create_table "featureds", force: :cascade do |t|
    t.string   "title"
    t.string   "subtitle"
    t.string   "description_date"
    t.string   "url"
    t.boolean  "target_blank"
    t.integer  "position"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.datetime "start_date"
    t.datetime "end_date"
    t.boolean  "show_title_banner_home"
    t.boolean  "show_subtitle_banner_home"
  end

  create_table "frequently_askeds", force: :cascade do |t|
    t.string   "question",    limit: 1000
    t.text     "answer"
    t.integer  "category_id"
    t.integer  "position"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "frequently_askeds", ["category_id"], name: "index_frequently_askeds_on_category_id", using: :btree

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string   "slug",                      null: false
    t.integer  "sluggable_id",              null: false
    t.string   "sluggable_type", limit: 50
    t.string   "scope"
    t.datetime "created_at"
  end

  add_index "friendly_id_slugs", ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true, using: :btree
  add_index "friendly_id_slugs", ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type", using: :btree
  add_index "friendly_id_slugs", ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id", using: :btree
  add_index "friendly_id_slugs", ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type", using: :btree

  create_table "genres", force: :cascade do |t|
    t.string   "name",       limit: 30
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  add_index "genres", ["name"], name: "index_genres_on_name", unique: true, using: :btree

  create_table "kind_events", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "kind_events", ["name"], name: "index_kind_events_on_name", unique: true, using: :btree

  create_table "newsletters", force: :cascade do |t|
    t.string   "email",      limit: 100
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "newsletters", ["email"], name: "index_newsletters_on_email", unique: true, using: :btree

  create_table "partnership_contacts", force: :cascade do |t|
    t.string   "company_name"
    t.string   "responsible_person"
    t.string   "email"
    t.string   "phone"
    t.text     "observations"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "previous_events", force: :cascade do |t|
    t.string   "title"
    t.text     "short_description"
    t.string   "slug"
    t.text     "description"
    t.text     "informations"
    t.boolean  "published"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.date     "date_start"
    t.date     "date_end"
    t.integer  "genre_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "previous_events", ["genre_id"], name: "index_previous_events_on_genre_id", using: :btree
  add_index "previous_events", ["slug"], name: "index_previous_events_on_slug", unique: true, using: :btree

  create_table "previous_events_images", force: :cascade do |t|
    t.string   "title"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "previous_event_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "previous_events_images", ["previous_event_id"], name: "index_previous_events_images_on_previous_event_id", using: :btree

  create_table "releases", force: :cascade do |t|
    t.string   "title"
    t.string   "description",       limit: 500
    t.boolean  "published"
    t.datetime "date"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.string   "file_file_name"
    t.string   "file_content_type"
    t.integer  "file_file_size"
    t.datetime "file_updated_at"
    t.string   "subtitle"
    t.datetime "end_date"
  end

  create_table "sales_channels", force: :cascade do |t|
    t.integer  "event_id"
    t.string   "name"
    t.string   "url"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.boolean  "ask_for_your_card"
  end

  add_index "sales_channels", ["event_id"], name: "index_sales_channels_on_event_id", using: :btree

  create_table "schedules", force: :cascade do |t|
    t.date     "date"
    t.integer  "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "schedules", ["event_id"], name: "index_schedules_on_event_id", using: :btree

  create_table "sessions", force: :cascade do |t|
    t.integer  "schedule_id"
    t.time     "time"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "sessions", ["schedule_id"], name: "index_sessions_on_schedule_id", using: :btree

  create_table "sponsors", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "position"
    t.string   "url"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "icon_file_name"
    t.string   "icon_content_type"
    t.integer  "icon_file_size"
    t.datetime "icon_updated_at"
  end

  add_index "sponsors", ["name"], name: "index_sponsors_on_name", unique: true, using: :btree

  create_table "subjects", force: :cascade do |t|
    t.string   "name"
    t.string   "email_redirection"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_foreign_key "business_contacts", "kind_events"
  add_foreign_key "contacts", "subjects"
  add_foreign_key "events", "age_ratings"
  add_foreign_key "events", "genres"
  add_foreign_key "frequently_askeds", "categories"
  add_foreign_key "previous_events", "genres"
  add_foreign_key "previous_events_images", "previous_events"
  add_foreign_key "sales_channels", "events"
  add_foreign_key "schedules", "events"
  add_foreign_key "sessions", "schedules"
end
