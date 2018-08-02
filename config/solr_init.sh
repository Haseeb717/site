#!/bin/sh
APP_ROOT=/home/deployer/railsapp/current
CMD_START="cd $APP_ROOT; bundle exec sunspot-solr start --port=8983"
CMD_STOP="cd $APP_ROOT; bundle exec sunspot-solr stop"
AS_USER=deployer


run () {
  if [ "$(id -un)" = "$AS_USER" ]; then
    eval $1
  else
    su -c "$1" - $AS_USER
  fi
}

case "$1" in
         start)
                echo "Iniciando Solr"
                run "$CMD_START"
                ;;
        stop)
                echo "Parando Solr"
                run "$CMD_STOP"
                ;;
        *)
esac
