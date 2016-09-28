var app = window.app || (window.app = {})
var Pym = require('pym.js');

var main = {

  init: function() {
    pymChild = new Pym.Child();
  }

};

$(document).ready(function() {
  main.init();
});
