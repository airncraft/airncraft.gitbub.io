$(document).ready(function() {


    $.getJSON("/testimonials/testimonials.json",
        function(data) {
            var testimonials = '';
            testimonials += '<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">'
            testimonials += '<div class="carousel-inner">'
            testimonials += '<div class="carousel-item active">'
            testimonials += '<div class="text-center">'
            testimonials += '<a class="portfolio-box" href="" target="_blank">'
            testimonials += '<img src="" style="width:90px">'
            testimonials += '</a>'
            testimonials += '<span class = "ml-2" >'
            testimonials += '<a class="portfolio-box" href="" target="_blank">'
            testimonials += '<img src="" style="width:90px"></a></span>'
            testimonials += '</div>'
            testimonials += '<div class = "text-center">'
            testimonials += '<p><strong>Prozone</strong></p>'
            testimonials += '<p>"Encouraging ideas for kids!"</p>'
            testimonials +='</div> '
            testimonials += '<br>'
            testimonials += '<div class="text-center"><strong> - Anonymous</strong> </div>'
            testimonials += '</div>'
            $.each(data, function(key, value) {
                testimonials += '<div class="carousel-item">'
                testimonials += '<div class="text-center">'
                testimonials += '<a class="portfolio-box" href="' + value.image_1 + '" target="_blank">'
                testimonials += '<img src="' + value.image_1 + '" style="width:90px"></a>'
                testimonials += '<span class="ml-2">'
                testimonials += '<a class="portfolio-box" href="' + value.image_2 + '" target="_blank">'
                testimonials += '<img src="' + value.image_2 + '" style="width:90px"></a>'
                testimonials += '</span>'
                testimonials += '</div>'
                testimonials += '<div class = "text-center">'
                testimonials += '<p><strong>'+value.workshop+'</strong></p>'
                testimonials += '<p>'+value.reviews+'</p>'
                testimonials += '</div><br>'
                testimonials += '<div class="text-center" id="testimonialsCustomerContainer">'
                testimonials += '<strong> - ' + value.customers + '</strong>'
                testimonials += '</div>'
                testimonials += '</div>'
            });
            testimonials += '</div>'
            testimonials += '</div>'
            $('#testimonialContainer').append(testimonials);
        });

});