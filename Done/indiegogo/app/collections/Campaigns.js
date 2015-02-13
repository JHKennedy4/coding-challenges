var Backbone = require('backbone');
var SingleCampaign = require('../models/SingleCampaign.js');
var $ = require('jquery-untouched');
var _ = require('underscore');

var Campaigns = Backbone.Collection.extend({

    model: SingleCampaign,

    initialize: function () {
        Backbone.on('filter', this.filter, this);
    },

    url: "https://api.indiegogo.com/1/campaigns.json?api_token=e377270bf1e9121da34cb6dff0e8af52a03296766a8e955c19f62f593651b346",

    sync: function () {
        var collection = this;
        var models = [];
        $.getJSON(this.url, function (data) {
            data.response.forEach(function (res) {
                models.push(new SingleCampaign(res));
            });
            collection.originalModels = models;
            collection.reset(models);
        });
    },

    filter: function (userInput) {

        var models = _.filter(this.originalModels, function (model) {
            return model.get('title').toLowerCase().indexOf(userInput.toLowerCase()) > -1 || model.get('tagline').toLowerCase().indexOf(userInput.toLowerCase()) > -1;
        });

        this.reset(models);
        return this;
    }
});

module.exports = Campaigns;
