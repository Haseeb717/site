set :port, 22
set :user, 'deployer'
set :deploy_via, :remote_cache
set :use_sudo, false
set :branch, :master

server '191.252.56.150',
  roles: [:web, :app, :db],
  port: fetch(:port),
  user: fetch(:user),
  primary: true

set :deploy_to, "/home/deployer/railsapp"

set :rails_env, :production
set :conditionally_migrate, true
