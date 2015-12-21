#!/usr/bin/env sh
bundle update
bundle exec sprockets \
  -r actioncable \
  -I. \
  -I$(bundle show actioncable)/lib/assets/javascripts \
  index.js.erb > dist/cable.js
