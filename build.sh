#!/usr/bin/env sh
bundle update

bundle exec sprockets \
  -r action_cable \
  -I. \
  -I$(bundle show actioncable)/lib/assets/javascripts \
  index.js > dist/actioncable.js
