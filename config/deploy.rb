# config valid only for current version of Capistrano
#lock '3.4.0'
lock '3.8.2'

set :rbenv_type, :user # or :system, depends on your rbenv setup
set :rbenv_ruby, '2.3.0'

#set :rbenv_prefix, "RBENV_ROOT=#{fetch(:rbenv_path)} RBENV_VERSION=#{fetch(:rbenv_ruby)} #{fetch(:rbenv_path)}/bin/rbenv exec"
set :rbenv_map_bins, %w{rake gem bundle ruby rails}
set :rbenv_roles, :all # default value
# aqui set :assets_manifests, ['app/assets/config/manifest.js']

set :application, 'railsapp'
set :repo_url, 'git@git.planb.com.br:teatro-santander/site.git'
# aqui set :rvm_ruby_version, '2.3.0'
set :bundle_binstubs, nil
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads ', 'public/assets/ckeditor', 'public/ckeditor_assets')
set :tests, ["spec"]

before :deploy, "deploy:run_tests"
after 'deploy:publishing', 'deploy:restart'
namespace :deploy do
  task :restart do
    invoke 'unicorn:legacy_restart'
    on roles(:app) do
      within current_path do
        with rails_env: fetch(:rails_env, 'production') do
          execute :bundle, 'exec', :rake, 'tmp:cache:clear'
        end
      end
    end
  end
end

#Rake::Task['deploy:assets:backup_manifest'].clear_actions
#namespace :deploy do
#  namespace :assets do
#    task :backup_manifest do
#      on roles(fetch(:assets_roles)) do
#        within release_path do
#          execute :cp,
#                  release_path.join('public', fetch(:assets_prefix), '.sprockets-manifest*'),
#                  release_path.join('assets_manifest_backup')
#        end
#      end
#    end
#  end
#end

namespace :deploy do
  before :updated, :setup_solr_data_dir do
    on roles(:app) do
      unless test "[ -d #{shared_path}/solr/data ]"
        execute :mkdir, "-p #{shared_path}/solr/data"
      end
    end
  end
end

namespace :solr do
  %w[start stop].each do |command|
    desc "#{command} solr"
    task command do
      on roles(:app) do
        solr_pid = "#{shared_path}/pids/sunspot-solr.pid"
        if command == "start" or (test "[ -f #{solr_pid} ]" and test "kill -0 $( cat #{solr_pid} )")
          within current_path do
            with rails_env: fetch(:rails_env, 'production') do
              execute :bundle, 'exec', 'sunspot-solr', command, "-p 8983 --pid-dir=#{shared_path}/pids"
            end
          end
        end
      end
    end
  end

  desc "restart solr"
  task :restart do
    invoke 'solr:stop'
    invoke 'solr:start'
  end

  after 'deploy:finished', 'solr:restart'

  desc "reindex the whole solr database"
  task :reindex do
    invoke 'solr:stop'
    on roles(:app) do
      execute :rm, "-rf #{shared_path}/solr/data"
    end
    invoke 'solr:start'
    on roles(:app) do
      within current_path do
        with rails_env: fetch(:rails_env, 'production') do
          info "Reindexing Solr database"
          execute :bundle, 'exec', :rake, 'sunspot:solr:reindex[,,true]'
        end
      end
    end
  end

end
