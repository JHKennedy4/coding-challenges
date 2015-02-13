var InputView = require('../../app/views/Input.js'),
    chai = require('chai'),
    should = chai.should(),
    chaiquery = require('chai-jquery'),
    Backbone = require('backbone'),
    _ = require('underscore');


describe("views/Input", function () {

    it("should fire a filter event when a keyup event is detected by the input view", function (done) {

        var inputView = new InputView();

        inputView.render();

        var input = inputView.$el.find('#filter');

        input.val('filter input');

        Backbone.on('filter', function (msg) {

            msg.should.equal('filter input');
            done();
        });

        input.trigger('keyup', input.val());

    });
});


