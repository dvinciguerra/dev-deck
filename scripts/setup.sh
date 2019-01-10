#!/bin/sh

# globals
CURRENT_OS=$(awk -F= '$1=="ID_LIKE" { print $2 ;}' /etc/os-release)

# ubuntu and debian
sudo apt install xdotool

# fedora
# sudo yum install xdotool
# sudo dnf install xdotool

# centos
# sudo yum install xdotool

# arch and others
# sudo pacman -S xdotool

