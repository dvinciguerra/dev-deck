#!/bin/sh

# start webapp server
rackup --env production --daemonize --pid devdeck.pid

# reverse proxy using ngrok
ngrok start deck > /dev/null &

# wait and store ngrok pid
sleep 1
ps --no-headers -C 'ngrok start deck' | sed -r 's/^([0-9]+)\s.*$/\1/g' > ngrok.pid
