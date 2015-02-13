console.log('Good luck!');

function test() {
    return 3;
}

var collection = new PageCollection();
var collectionView = new PageCollectionView({
    target: "pages-column",
    collection: collection,
    templateID: "pages"
});

collection.sync();
