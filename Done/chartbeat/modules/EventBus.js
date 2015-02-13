var EventBus = (function () {

    var namespace = ".eventbus";
    var exports = {};
    function eventString(eventType) {
        return eventType + namespace;
    }

    exports.on = function (eventType, callback) {
        document.addEventListener(eventString(eventType), callback);
    };

    exports.off = function (eventType, callback) {
        document.removeEventListener(eventString(eventType), callback);
    };

    exports.trigger = function (eventType) {
        document.dispatchEvent(new Event(eventString(eventType)));
    };


    return exports;

}());
