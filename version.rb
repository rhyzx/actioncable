require 'action_cable'
# fix semver
puts ActionCable::version.to_s
.gsub(/\./).with_index {|s, i| i === 2 ? '-' : s}
