(function () {
    var noteIdSelector = "#newStickyNote";
    var stickyNoteSelector = ".PIApostit"

    $(noteIdSelector).click(function (event) {
        $.PostItAll.new({
            posX: (event.pageX - 150),
            posY: (event.pageY + 50)
        });

        event.preventDefault();
    });
})();