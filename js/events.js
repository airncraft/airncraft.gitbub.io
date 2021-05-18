$(document).ready(function() {


    $.getJSON("events.json",
        function(data) {
            var event = '';
            $.each(data, function(key, value) {

                event += '<div class="col-lg-4 col-md-6 col-sm-12">'
                event += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded zoom" src="' + value.img + '">'
                event += '<div class="text-center">'
                event += '<h6 class="mb-2 mt-2">' + value.name + '</h6>'
                event += '<p class="text-muted mb-0">' + value.date + '</p>'
                event += '<br><div class="text-center"><a class="btn btn-primary" target="_blank" href="' + value.link + '">Visit</a></div>'
                event += '</div>'
                event += '</div>'

            });
            $('#container').append(event);
        });
});