    var sly = new Sly($('.frame'), {
        horizontal: 1, // required
        itemNav: 'basic', // required
        smart: 1,
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1
    }, null).init();
    var counter = 0;
    setInterval(function () {
        //$('.slidee').append('<li>'+(counter++)+'</li>');
        sly.reload();
    }, 500);
