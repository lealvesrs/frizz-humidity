
$(document).ready(function () {



    $("#icon-search").click(function () {
        var cidade = $('#input-search').val();

        if (cidade == 'votuporanga') {
            $('#card').addClass("dry-card");
            $('body').addClass("body-dry");
            $('body').removeClass('body-img');
            $('#shape').hide();
            $('#input-search').removeClass("input-search-init");
            $('#input-search').addClass("input-search-dry");
            $('#icon').addClass("icon-dry");
            $('#porcent').addClass("porcent-dry");
            $('#humidity').addClass("humidity-dry");
            $('#words').addClass("dry-words");
            $('#weather').addClass("dry-weather");
            $('#simbol').addClass("dry-simbol");
            $('#content').removeClass("none");
            $('#rodape').removeClass("none");

        }
    });



    $('#angle-icon').hover(
        function () {
            $('#rodape').hide();
            $('#content').hide();
            $('#search').hide();
            $('#card').removeClass('dry-card');
            $('#results').show();
        }, function () {
            $('#rodape').show();
            $('#content').show();
            $('#search').show();
            $('#card').addClass('dry-card');
            $('#results').hide()
        }
    );


});


