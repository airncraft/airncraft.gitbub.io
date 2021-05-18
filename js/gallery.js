$(document).ready(function() {


    $.getJSON("/gallery/virtual-summer-camp-april-2020.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer_title').append(gallery_title);


            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center zoom">'
                gallery += '<div class="mt-5 mr-2">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid zoom edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer').append(gallery);
        });
    $.getJSON("/gallery/workshop-at-home-jan-2020.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer1_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer1').append(gallery);
        });
    $.getJSON("/gallery/combo-workshop-jan-2020.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer2_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer2').append(gallery);
        });
    $.getJSON("/gallery/crafty-christmas-workshop-dec-2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer3_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer3').append(gallery);
        });
    $.getJSON("/gallery/paint-and-plane-december-2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer4_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer4').append(gallery);
        });
    $.getJSON("/gallery/paint-and-plane_nov-2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer5_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer5').append(gallery);
        });
    $.getJSON("/gallery/airncraft_event_and_contest_2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer6_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom work-shop">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer6').append(gallery);
        });
    $.getJSON("/gallery/glider-and-popup-card-workshop-sep-2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer7_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom work-shop">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer7').append(gallery);
        });
    $.getJSON("/gallery/csr-activity-september-2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer8_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer8').append(gallery);
        });
    $.getJSON("/gallery/rakshabandan-hamper-and-rc-plane-workshop-aug-2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer9_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer9').append(gallery);
        });

    $.getJSON("/gallery/arts-crafts-workshop-July-2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer10_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer10').append(gallery);
        });

     $.getJSON("/gallery/made-with-scraps-june.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer11_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer11').append(gallery);
        });

     $.getJSON("/gallery/balsa-glider-and-canvas-nameplate-workshop-june-2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer12_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer12').append(gallery);
        });

     $.getJSON("/gallery/summer-camp-may-2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer13_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer13').append(gallery);
        });


     $.getJSON("/gallery/kovai-vizha-aeromodelling-workshop-january-2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer14_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer14').append(gallery);
        });
     $.getJSON("/gallery/kovai-vizha–canvas-and-balsa-plane-workshop-january-2019.json",
        function(data) {
            var gallery_title = '';
            gallery_title += '<div class="col-lg-6 col-sm-4 text-center">'
            gallery_title += '<h5 class="text-left font-weight-bold text-black">' + data[1].name + ' - ' + data[1].desc + '</h5>'
            gallery_title += '</div>'
            $('#imgcontainer15_title').append(gallery_title);

            var gallery = '';
            $.each(data, function(key, value) {

                gallery += '<div class="col-lg-4 col-sm-4 text-center">'
                gallery += '<div class="mt-5 zoom">'
                gallery += '<a class="portfolio-box" href="' + value.image1 + '">'
                gallery += '<img class="img-fluid edge work-shop" src="' + value.image + '">'
                gallery += '<div class="portfolio-box-caption">'
                gallery += '<div class="project-category text-white-50">' + value.name + '</div>'
                gallery += '<div class="project-name">' + value.desc + '</div>'
                gallery += '</div>'
                gallery += '</a>'
                gallery += '</div>'
                gallery += '</div>'

            });
            $('#imgcontainer15').append(gallery);
        });

});