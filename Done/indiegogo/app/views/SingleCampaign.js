var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;

var SingleCampaignTemplate = require('../templates/SingleCampaign.hbs');

var Singlecampaign = Backbone.View.extend({

  tagName: 'li',
  template: SingleCampaignTemplate,

  initialize: function (model) {
      this.model = model;
  },

  render: function() {
    console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    var progress = this.model.attributes.percent_completed;
    if(progress >= 100) {
        progress = 100;
    }
    this.$el.find(".progress").css({
        width: progress + "%"
    });
    this.$el.find(".left").css({
        width: (100 - progress) + "%"
    });
    return this;
  }

});
module.exports = Singlecampaign;
