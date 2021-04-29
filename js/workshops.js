$(document).ready(function() {


    $.getJSON("workshops.json",
        function(data) {
            var workshop = '';
            $.each(data, function(key, value) {

                workshop += '<div class="col-lg-4 col-sm-4">'
                workshop += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded zoom work-shop" src="' + value.img + '">'
                workshop += '<div class="align-self-baseline">'
                workshop += '<h6 class="mb-2 mt-2 text-center">' + value.name + '</h6>'
                workshop += '<p class="text-muted mb-0 text-center">' + value.date + '</p>'
                workshop += '<br><div class="text-center mb-3"><a class="btn btn-primary" target="_blank" href="' + value.link + '">Visit</a></div>'
                workshop += '</div>'
                workshop += '</div>'

            });
            $('#container').append(workshop);
        });
});