var CampaignCollection = require('../../app/collections/Campaigns.js'),
    chai = require('chai'),
    should = chai.should(),
    sinon = require('sinon'),
    Backbone = require('backbone'),
    _ = require('underscore');


describe("Collections/Campaigns", function () {

    var campaignCollection;
    var xhr;
    var request;

    beforeEach(function () {
        xhr = sinon.useFakeXMLHttpRequest();
        request = null;

        xhr.onCreate = function ( xhr ) {
            request = xhr;
        };

        campaignCollection = new CampaignCollection();
        campaignCollection.sync();

        request.respond(200, {'Content-Type': 'text/plain'}, JSON.stringify(require('../response.js').response));

    });

    afterEach(function () {
        xhr = null;
        campaignCollection = null;
    });


    it("should filter by title on filter event", function () {

        Backbone.trigger('filter', 'timelash');
        campaignCollection.models[0].get("title").should.equal("TimeLash - das erste Event für Fans von Doctor Who");

    })

    it("should filter the collection by title", function () {

        var collection = campaignCollection.filter("TimeLash");

        campaignCollection.models.length.should.equal(1);
         campaignCollection.models[0].get("title").should.equal("TimeLash - das erste Event für Fans von Doctor Who");

    });

    it("should return the correct url for the collection", function () {

        var campaignCollection =  new CampaignCollection();

        campaignCollection.url.should.equal("https://api.indiegogo.com/1/campaigns.json?api_token=e377270bf1e9121da34cb6dff0e8af52a03296766a8e955c19f62f593651b346");

    });

    it("should initialize with values from the server", function () {
      
        campaignCollection.models.length.should.be.greaterThan(0);
    });

});
