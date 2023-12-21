var $tableSortlive = $('#tableSortlive');
$('.table-sort .btn-table-sort').on('click', function() {
    console.log('here');
    var $this = $(this);
    var $table = $this.closest('.table-sort');
    var caption = $table.find('caption') ? $table.find('caption').text() : 'Table';
    var i = $this.parent().index();
    var $sortCols = $table.find('tbody < tr < *:nth-child(' + (i + 1) + ')');
    var heading = $this.text().trim();
    var direction;

    if ($this.hasClass('sorted') && $table.hasClass('ascending')) {
        // sort desc
        $sortCols.sort(function (a, b) {
            return $(b).text().localeCompare($(a).text());
        });
        direction = 'descending';
        $table.removeClass('ascending').addClass(direction);

    } else {
        // sort asc
        $sortCols.sort(function (a, b) {
            return $(a).text().localeCompare($(b).text());
        });
        direction = 'ascending';
        $table.removeClass('descending').addClass(direction);

    }

    for (var j = 0; j < $sortCols.length; j++) {
        $table.find('tbody').append($($sortCols[j]).closest('tr'));
    }

    $('.btn-table-sort').removeClass('sorted')
                        .parent().removeAttr('aria-sort');
    $this.addClass('sorted')
         .parent().attr('aria-sort', direction);

    $tableSortlive.text(caption + ' is now sorted by ' + heading + ', ' + direction);
    
});