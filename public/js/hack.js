setTimeout(function() {
    $('#loading').addClass('hidden');
}, 3000);

function NewTab() {
    window.open(
        "../user.html", "_self");
}



$(document).ready(function() {
    // init Isotope
    var $grid = $('.cards').isotope({
        itemSelector: '.card',
        layoutMode: 'fitRows',
        getSortData: {
            f_name: '.f-name',
            l_name: '.l-name'
        }
    });

    $('#price-sort').on('change', function() {
        var type = $(this).find(':selected').attr('data-sorttype');
        var sortValue = this.value;
        $grid.isotope({ sortBy: sortValue });

    });



});
// tiles  



$(document).ready(function() {
    var zindex = 10;

    $("div.card").click(function(e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("show")) {
            isShowing = true
        }

        if ($("div.cards").hasClass("showing")) {
            // a card is already in view
            $("div.card.show")
                .removeClass("show");

            if (isShowing) {
                // this card was showing - reset the grid
                $("div.cards")
                    .removeClass("showing");
            } else {
                // this card isn't showing - get in with it
                $(this)
                    .css({ zIndex: zindex })
                    .addClass("show");

            }

            zindex++;

        } else {
            // no cards in view
            $("div.cards")
                .addClass("showing");
            $(this)
                .css({ zIndex: zindex })
                .addClass("show");

            zindex++;
        }

    });
});