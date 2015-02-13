var PageCollection = (function (Page, API, EventBus) {

    function PageCollection() {
        this.model = Page;
        this.loadedEvent = "collection:loaded";
    }

    PageCollection.prototype.sync = function () {

        var that = this;
        API.getData(function (response, e) {
            if(!e) {
                console.log("SYNC");
                that.collection = {};
                that.collection.pages = [];
                response.pages.forEach(function (page, i) {

                    page.event = "page:" + i;
                    page.func = "EventBus.trigger('" + page.event + "')";
                    EventBus.on(page.event, function () {
                        var pageView = new PageView({
                            model: new Page(page),
                        });
                        pageView.render();
                    });

                    that.collection.pages.push(page);
                });

                EventBus.trigger(that.loadedEvent);
            }

            var sync = that.sync.bind(that);
            window.setTimeout(sync, 5000);
        });
    };

    PageCollection.prototype.getPages = function () {
        return this.collection;
    };

    return PageCollection;

}(Page,cbApi, EventBus));
