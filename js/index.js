
$(document).ready(function () {

    let apiKey = '12d006d950c398772ce30392456a62ad';

    function getCity() {
        var cidade = $('#input-search').val();
        getWeatherData(cidade)
    }


    const getWeatherData = async (cidade) => {
        $('.div-loader').removeClass("none");
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`
        const res = await fetch(url)
        const data = await res.json();
        if (data.cod == '404') errorData()
        else showWeatherData(data)

        $('.div-loader').addClass("none");

        return data;
    }


    const showWeatherData = async (data) => {

        var humidity = (data.main.humidity).toString()
        var name = (data.name).toString()
        var humidity = (data.main.humidity).toString()
        var temp = (data.main.temp).toString()
        var wind = ((data.wind.speed) * 3.6).toString()

        $('#humidity').text(humidity + '%');
        $('#city').html('<p>' + name + '</p>');
        $('#temp').html('<i class="fa-solid fa-temperature-half"></i> ' + temp.split(".", 1) + ' °C');
        $('#wind').html('<i class="fa-solid fa-wind"></i> ' + wind.split(".", 1) + ' Km/h');
        testHumidity(humidity)

    };

    function errorData() {
        clearStyle()
        $('#errorMsg').removeClass('none');
        $('body').addClass("body-img");
    }

    const testHumidity = async (humidity) => {
        if (humidity < 45) lowHumidity()
        else if (humidity >= 45 && humidity <= 60) normalHumidity()
        else highHumidity()
    }


    $("#input-search").keypress(function (event) {
        if (event.which == 13) {
            $('.div-loader').removeClass("none");
            getCity()
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

    function clearStyle() {
        $('#card').removeClass();
        $('#weather').removeClass();
        $('body').removeClass();
        $('#input-search').removeClass();
        $('#input-search').addClass('input-search-init ');
        $('#porcent').removeClass();
        $('#humidity').removeClass();
        $('#words').removeClass();
        $('#info').removeClass();
        $('#simbol').removeClass();
        $('#results').removeClass();
        $('#results').addClass("none");
        $('#content').addClass("none");
        $('#rodape').addClass("none");
        $('#errorMsg').addClass("none");
    }

    function normalHumidity() {
        clearStyle()
        $('#card').addClass("normal-card");
        $('body').addClass("normal-body");
        $('#input-search').addClass("input-search-normal");
        $('#content').removeClass("none");
        $('#rodape').removeClass("none");
        $('#results').addClass("normal-results");
        $('#weather').addClass("normal-weather");
        $('#titleWeather').text(`Umidade ideal`);
        $('#words').html(`No <span>frizz</span>`);
        $('#porcent').addClass("porcent-normal");
        $('#humidity').addClass("humidity-normal");
        $('#words').addClass("normal-words");
        $('#info').addClass("normal-info");
        $('#simbol').addClass("normal-simbol");
        $('#info').html(`<span>BOAS CONDIÇÕES</span>
            <p>Fios alinhados</p>
            <p>Cachos definidos</p>
            <p>Poucos nós</p>`);
        $('#simbol').html(` <img src="img/ya.png">`)
    }

    function highHumidity() {
        clearStyle()
        $('#card').addClass("wet-card");
        $('body').addClass("wet-body");
        $('#input-search').addClass("input-search-wet");
        $('#content').removeClass("none");
        $('#rodape').removeClass("none");
        $('#weather').addClass("wet-weather");
        $('#titleWeather').text(`Alta umidade`);
        $('#words').html(`<span>F</span>rizz alert`);
        $('#porcent').addClass("porcent-wet");
        $('#humidity').addClass("humidity-wet");
        $('#words').addClass("wet-words");
        $('#info').addClass("wet-info");
        $('#simbol').addClass("wet-simbol");
        $('#info').html(`<span>ATENÇÃO EM:</span>
        <p>Aumento do frizz</p>
        <p>Indefinição</p>
        <p>Emaranhamento dos fios</p>`);
        $('#simbol').html(` <img src="img/guarda.png">`)
    }


    function lowHumidity() {
        clearStyle()
        $('#card').addClass("dry-card");
        $('body').addClass("dry-body");
        $('#input-search').removeClass("input-search-init");
        $('#input-search').addClass("input-search-dry");
        $('#icon').addClass("icon-dry");
        $('#porcent').addClass("porcent-dry");
        $('#humidity').addClass("humidity-dry");
        $('#weather').addClass("dry-weather");
        $('#words').addClass("dry-words");
        $('#words').html(`<span>F</span>rizz alert`);
        $('#titleWeather').text(`Baixa umidade`);
        $('#info').addClass("dry-info");
        $('#simbol').addClass("dry-simbol");
        $('#content').removeClass("none");
        $('#rodape').removeClass("none");
        $('#info').html(`<span>ATENÇÃO EM:</span>
        <p>Descamação do couro cabeludo</p>
        <p>Ruptura dos fios</p>
        <p>Ressecamento e porosidade</p>`);
        $('#simbol').html(` <img src="img/cacto.png">`)
    }



});


