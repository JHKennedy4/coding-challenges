var Backbone = require('backbone');

var Singlecampaign = Backbone.Model.extend({
    initialize: function () {
        this.attributes.percent_completed = Math.floor(this.attributes.collected_funds/this.attributes.goal*100);
    }
});
module.exports = Singlecampaign;
