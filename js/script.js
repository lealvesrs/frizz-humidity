
$(document).ready(function () {

    function verificaCidade() {
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
            $('#info').append(`<span>ATENÇÃO EM:</span>
            <p>Aumento do frizz</p>
            <p>Indefinição</p>
            <p>Emaranhamento dos fios.</p>`);
            $('#simbol').append(` <img src="img/cacto.png">`)
        }
    }


    $("#icon-search").click(function () {
        verificaCidade()
    });

    $("#input-search").keypress(function (event) {
        if (event.which == 13) {
            verificaCidade()
        }
    })


    $('#angle-icon').click(function () {
        $('#content').hide();
        $('#search').hide();
        $('#card').removeClass('dry-card');
        $('#card').addClass('dry-card-info');
        $('#results').show();
        $('#rodape').hide();
    });

    $('#angle-icon-left').click(function () {
        $('#content').show();
        $('#search').show();
        $('#card').addClass('dry-card');
        $('#card').removeClass('dry-card-info');
        $('#results').hide();
        $('#rodape').show();

    });

});


