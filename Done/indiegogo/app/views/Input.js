var Backbone = require('backbone');
var _ = require('underscore');

var InputTemplate = require('../templates/Input.hbs');

var Input = Backbone.View.extend({

  template: InputTemplate,

  events: {
      'keyup #filter': "filter"
  },

  filter: function () {

      var inputValue = this.$el.find('#filter').val();
      Backbone.trigger('filter', inputValue);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
module.exports = Input;
