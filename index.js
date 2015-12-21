//= require action_cable

// umd export
// https://github.com/umdjs/umd/blob/master/templates/returnExports.js
var ActionCable = this.ActionCable
if (typeof define === 'function' && define.amd) {
  // AMD. Register as an anonymous module.
  define([], function () { return ActionCable })
} else if (typeof module === 'object' && module.exports) {
  // Node. Does not work with strict CommonJS, but
  // only CommonJS-like environments that support module.exports,
  // like Node.
  module.exports = ActionCable
} else {
  // Browser globals (root is window)
  this.ActionCable = ActionCable
}
