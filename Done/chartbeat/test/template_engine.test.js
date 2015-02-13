describe("TemplateEngine", function () {
    it("should replace matching object paths with their values", function () {

        var template = new Template("<div class='test'>{{value}}</div>\n<div class='other-test'>{{multi.level.object}}</div>");
        var data = {
            value: "hello",
            multi: {
                level: {
                    object: "world"
                }
            }
        };

        var output = template.render(data);

        expect(output).to.equal("<div class='test'>hello</div> <div class='other-test'>world</div>");

    });

    it("should replace matching collection values within an each stattement", function () {
        var repeatedValue = {
            values: [
                {
                    title: "first",
                    attr: {
                        other: "things",
                        more: "other things"
                    }
                },
                {
                    title: "second",
                    attr: {
                        other: "less things"
                    }
                }
            ]
        };
        var template = new Template( "<ul class='test'>\n" +
            "{{#each values}}\n" +
                "<li>{{title}} has {{attr.other}} and {{attr.more}}</li>\n" +
            "{{/each}}\n" +
            "</ul>");

        var output = template.render(repeatedValue);

        // could do a better job stripping whitespace
        // in template function
        expect(output).to.equal("<ul class='test'> " +
                " <li>first has things and other things</li> " +
                " <li>second has less things and </li> " +
            " </ul>");


    });
});
