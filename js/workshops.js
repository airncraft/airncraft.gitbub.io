$(document).ready(function() {


    $.getJSON("workshops.json",
        function(data) {
            var workshop = '';
            $.each(data, function(key, value) {

                workshop += '<div class="col-lg-4 col-md-6 col-sm-12">'
                workshop += '<div class="text-center">'
                workshop += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded zoom work-shop" src="' + value.img + '">'
                workshop += '</div>'
                workshop += '<div class="text-center">'
                workshop += '<h6 class="mt-0">' + value.name + '</h6>'
                workshop += '<p class="text-muted mb-0 ">' + value.date + '</p>'
                workshop += '<br><div class="mb-3"><a class="btn btn-primary" target="_blank" href="' + value.link + '">Visit</a></div>'
                workshop += '</div>'
                workshop += '</div>'

            });
            $('#container').append(workshop);
        });
});