describe("Minibeat", function () {
    it("should be able to call functions defined in excercise.js", function () {
        var value = test();
        expect(value).to.equal(3);
    });
});
