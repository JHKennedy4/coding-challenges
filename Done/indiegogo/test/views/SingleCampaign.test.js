var SingleCampaignView = require('../../app/views/SingleCampaign.js'),
    SingleCampaign = require('../../app/models/SingleCampaign.js'),
    chai = require('chai'),
    should = chai.should(),
    response = require('../response.js').response;

describe("Views/SingleCampaign", function (){

    xit("should render with the given model", function () {
        var campaign = new SingleCampaign(response.response[0]);
        var campaignView = new SingleCampaignView(campaign);

     var expectedHTML = ('<img alt="TimeLash - das erste Event für Fans von Doctor Who image" src="http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1418648322/gjfoqaqb0pwvii0vwnvx.jpg">\n' +
               '<div class="title">TimeLash - das erste Event für Fans von Doctor Who</div>\n' +
               '<div class="tagline">Stargäste aus \"Doctor Who\" * Panels &amp; Interviews * Fan-Aktionen * Cosplay</div>\n').replace(/ /g,'');


        campaignView.render().$el.html().replace(/ /g,'')
            .should
            .equal(expectedHTML);
                            ;
    });
});
