$(document).ready(function() {
    $.getJSON("workbooks.json",
        function(data) {
            var workbook = '';
            $.each(data, function(key, value) {

                workbook += '<div class="col-lg-3 col-sm-3 my-2">'
                workbook += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded zoom" src="' + value.img + '">'
                workbook += '<div class="align-self-baseline">'
                workbook += '<h6 class="mb-2 mt-2">' + value.name + '</h6>'
                workbook += '<p class="text-muted mb-0">' + value.desc + '</p>'
                workbook += '<br> Age Group:<a class="btn btn-primary" target="_blank" href="' + value.age4to8 + '">4 - 8</a>'
                workbook += '<a class="btn btn-green ml-1" target="_blank" href="' + value.age8to15 + '">8 - 15</a>'
                workbook += '</div>'
                workbook += '</div>'

            });
            $('#container').append(workbook);
        });
});