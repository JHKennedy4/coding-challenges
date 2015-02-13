var SingleCampaign = require('../../app/models/SingleCampaign.js'),
    chai = require('chai'),
    should = chai.should(),
    response = require('../response.js').response;

describe("Models/SingleCampaign", function () {

    it("should initialize", function () {
        var campaign = new SingleCampaign(response.response[0]);

        campaign.get('id').should.equal(1009068);
    });
});
