var PageCollectionView = (function (Template) {

    function PageCollectionView(options) {
        this.collection = options.collection;
        this.target = options.target;
        this.templateID = options.templateID;

        var templateEl = document.getElementById(this.templateID);

        this.template = new Template(templateEl.innerHTML);

        var that = this;
        EventBus.on(collection.loadedEvent, function () {
            var html = that.render();
            var target = document.getElementById(that.target);
            target.innerHTML = html;
        });

    }

    PageCollectionView.prototype.render = function () {
        return this.template.render(this.collection.getPages());
    };

    return PageCollectionView;

}(Template));
