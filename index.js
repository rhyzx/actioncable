//= require cable

// umd export
// https://github.com/umdjs/umd/blob/master/templates/returnExports.js
var Cable = this.Cable
if (typeof define === 'function' && define.amd) {
  // AMD. Register as an anonymous module.
  define([], function () { return Cable })
} else if (typeof module === 'object' && module.exports) {
  // Node. Does not work with strict CommonJS, but
  // only CommonJS-like environments that support module.exports,
  // like Node.
  module.exports = Cable
} else {
  // Browser globals (root is window)
  this.Cable = Cable
}
