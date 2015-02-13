var PageView = (function (EventBus, Template) {

    function PageView(options) {
        this.model = options.model;
        this.target = "details-column";
        this.templateID = "details";
        var templateEl = document.getElementById(this.templateID);
        this.template = new Template(templateEl.innerHTML);
    }

    PageView.prototype.render = function () {
        var html = this.template.render(this.model.attributes);
        var target = document.getElementById(this.target);
        target.innerHTML = html;
    };

    return PageView;

}(EventBus, Template));
