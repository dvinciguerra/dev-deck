#!/bin/sh

# globals
SERVER_PID=$(cat devdeck.pid)
NGROK_PID=$(cat ngrok.pid)

# stop ngrok and webserver
kill $NGROK_PID
kill $SERVER_PID && rm ngrok.pid
