var Backbone = require('backbone');
Backbone.$ = require('jquery-untouched');
Backbone.Marionette = require('backbone.marionette');
var CampaignView = require('../views/SingleCampaign.js');
var Campaigns = require('../collections/Campaigns.js');

var Campaigns = Backbone.Marionette.CollectionView.extend({

  tagName: 'ul',
  childView: CampaignView,
  initialize: function () {
      this.listenTo(this.collection, 'reset', function () {
          this.render();
          //console.log(this.el);
      });
  },
  render: function () {
      this.$el.empty();
      var view = this;

      this.collection.each(function (el) {
          view.$el.append(new view.childView(el).render().el);
      });
      return this;
  }

});
module.exports = Campaigns;
