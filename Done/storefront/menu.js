function buildMenu(menuTarget, menuItems) {
    var $menuTarget = $(menuTarget);

    menuItems.forEach(buildItem($menuTarget));
    return $menuTarget;
}

function buildItem($menuTarget) {

    return function (item) {
        var $menuItem = $($("#menu-item-template").html());

        $menuItem.text(item.title);

        $menuItem.on('click', function (e) {
            e.stopPropagation();
            alert(item.title);
        });

        $menuTarget.append($menuItem);
        if (item.submenu) {
            buildSubmenu($menuItem, item.submenu);
        }
    };
}

function buildSubmenu($menuItem, submenu) {
    var submenuTarget = $("#menu-template").html();
    var $submenu = buildMenu(submenuTarget, submenu);

    $submenu.hide();
    $menuItem.append($submenu);

    $menuItem.on("mouseover", show($menuItem, $submenu));

    $menuItem.on("mouseleave", function () {
        $submenu.hide();
    });
}

function show($menuItem, $submenu) {
    return function () {
        var pos = $menuItem.position();
        $submenu.show();
        $submenu.css({
            left: (pos.left + $menuItem.outerWidth()-2) + "px"
        });
    };
}

// main
buildMenu("#menu-target", MENU);
