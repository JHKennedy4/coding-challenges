var $ = require('jquery-untouched');
var Backbone = require('backbone');
var CampaignCollection = require('./collections/Campaigns.js');
var CampaignsView = require('./views/Campaigns.js');
var InputView = require('./views/Input.js');
Backbone.$ = $;


var campaigns = new CampaignCollection();
var campaignsView = new CampaignsView({collection: campaigns});

campaignsView.listenTo(campaigns, 'reset', function () {
    $('body').append(campaignsView.el);
});

campaigns.sync();

var input = new InputView();

input.render();

$('body').append(input.el);


