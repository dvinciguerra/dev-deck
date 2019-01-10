# frozen_string_literal: true

require_relative "./app.rb"

puts "Server starting at http://127.0.0.1:9292"

run Sinatra::Application
