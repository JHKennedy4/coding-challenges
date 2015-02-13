var CampaignsView = require('../../app/views/Campaigns.js'),
    CampaignsCollection = require('../../app/collections/Campaigns.js'),
    chai = require('chai'),
    should = chai.should(),
    sinon = require('sinon'),
    SingleCampaign = require('../../app/models/SingleCampaign.js'),
    SingleCampaignView = require('../../app/views/SingleCampaign.js'),
    response = require('../response.js').response;

describe("views/Campaigns", function (){

    xit("should update the view on collection's change event", function () {

        var collection = new CampaignsCollection(response);
        var view = new CampaignsView({collection: collection});

        view.render();

        collection.reset([response.response[0], response.response[2]]);

        view.$el.find('li').length.should.equal(2);

    });

    xit("should accurately render a collection of views from a sync call", function (done) {

        var xhr = sinon.useFakeXMLHttpRequest();
        var request = null;
        xhr.onCreate = function (xhr) {
            request = xhr;
        };

        var campaign = new CampaignsCollection();
        var campaignView = new CampaignsView({collection: campaign});

        var expectedHtml = "<ul>\n";
        response.response.forEach(function (res) {
            var singleCampaign = new SingleCampaign(res);
            var singleCampaignView = new SingleCampaignView(singleCampaign);

            singleCampaignView.render();
            expectedHtml += singleCampaignView.$el.html() + "\n";
        });
        expectedHtml += "</ul>";

        campaignView.listenTo(campaign, 'reset', function () {

            campaignView.render();
            campaignView.el.should.equal(expectedHtml);

            done();
        });


        campaign.sync();

        request.respond(200, {'Content-Type': 'text/plain'}, JSON.stringify(response));

    });


});
