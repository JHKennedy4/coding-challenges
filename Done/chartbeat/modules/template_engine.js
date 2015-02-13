var Template = (function () {

    function Template (template) {
        this.template = template;
    }

    /*
     * this function is inspired by
     * John Resig's microtemplating blog post:
     *     http://ejohn.org/blog/javascript-micro-templating/
     */
    Template.prototype.render = function (data) {

        // replace carriage returns, tabs, and newlines with " "
        var cleanTemplate = this.template
            .replace(/[\r\t\n]/g, " ");

        // you only get one loop, sorry
        var loop = cleanTemplate.match(/{{#each.*\/each}}/g);
        var rest;

        if(loop) {
            rest = cleanTemplate.split(/{{#each.*\/each}}/);
            loopOutput = renderLoop(loop[0], data);
            cleanTemplate = [rest[0], loopOutput, rest[1]].join('');
        }

        return tokenizeAndReplace(cleanTemplate, data);

    };

    function goDeep(targetString, obj) {
        if(targetString.indexOf(".") < 0) {
            return obj[targetString] || "";
        }
        var address = targetString.substring(0, targetString.indexOf("."));
        var rest = targetString.substring(targetString.indexOf(".") + 1);

        if(obj[address] && rest.length > 0) {
            return goDeep(rest, obj[address]);
        } else {
            return obj[address] || "";
        }

    }

    function renderLoop(loopString, data) {
        var loopArray = loopString.replace(/{{#each\s*/, '')
                   .replace(/{{\/each}}/, '')
                   .split(/}}/);

        var loopData = goDeep(loopArray[0], data);
        if(!loopData) {
            return "";
        }

        var result = [];
        var loopTemplate = loopArray.slice(1).join("}}");
        loopData.forEach(function (value) {
            result.push(tokenizeAndReplace(loopTemplate, value));
        });

        return result.join("");
    }

    function tokenizeAndReplace(string, data) {
        var tokens = string.split("{{"); // split on variable start

        var resultArray = [];
        tokens.forEach(replaceTokenWithValue(resultArray, data));

        return resultArray.join('');
    }

    function lookup (obj,i) {
        if(obj[i]) {
            return obj[i];
        } else {
            return "";
        }
    }

    function replaceTokenWithValue(resultArray, data) {
        return function (token) {

            var match = token.match(/.*}}/);
            if(!match) {
                resultArray.push(token);
                return;
            }

            var rest = token.replace(/.*}}/, '');
            var address = match[0].replace(/}}/,'');

            // map template
            var value = address.split('.')
                .reduce(lookup, data);

            resultArray.push(value);
            resultArray.push(rest);
        };
    }

    return Template;


}());
