
$(document).ready(function () {

    var $body = $('body');
    var $card = $('#card');
    var $loader = $('#loader');
    var $divSearch = $('#search');
    var $input_search = $('#input-search');
    var $icon_search = $('#icon-search');
    var $results = $('#results');
    var $errorMsg = $('#errorMsg');
    var $content = $('#content');
    var $divSearch = $('#search');
    var $rodape = $('#rodape');

    var $humidity = $('#humidity');
    var $city = $('#city');
    var $temp = $('#temp');
    var $wind = $('#wind');
    var $porcent = $('#porcent');
    var $words = $('#words');
    var $simbol = $('#simbol');
    var $info = $('#info');
    var $weather = $('#weather');
    var $titleWeather = $('#titleWeather');
    

    function getCity() {
        let cidade = $('#input-search').val();
        getWeatherData(cidade)
    }


    const getWeatherData = async (cidade) => {
        $loader.removeClass("none");
        $icon_search.css("display", "none");
        let url = `https://api-hairhumidity.onrender.com/getCity/${cidade}`
        const res = await fetch(url)
        const data = await res.json();
        if (data.status == '404') errorData()
        else showWeatherData(data)

        $loader.addClass("none");
        $icon_search.css("display", "inline");

        return data;
    }


    const showWeatherData = async (data) => {

        let humidity = (data.main.humidity).toString()
        let name = (data.name).toString()
        let temp = (data.main.temp).toString()
        let wind = ((data.wind.speed) * 3.6).toString()

        $humidity.text(humidity + '%');
        $city.html('<p>' + name + '</p>');
        $temp.html('<i class="fa-solid fa-temperature-half"></i> ' + temp.split(".", 1) + ' °C');
        $wind.html('<i class="fa-solid fa-wind"></i> ' + wind.split(".", 1) + ' Km/h');

        testHumidity(humidity)

    };

    function errorData() {
        clearStyle()
        $errorMsg.removeClass('none');
        $card.height("180px");
    }

    const testHumidity = async (humidity) => {
        clearStyle();
        if (humidity < 45) lowHumidity()
        else if (humidity >= 45 && humidity <= 60) normalHumidity()
        else highHumidity()

        $content.removeClass("none");
        $rodape.removeClass("none");
        $card.height("450px");
    }


    $input_search.keypress(function (event) {
        if (event.which == 13) {
            $icon_search.css("display", "inline");
            getCity()
        }
    })

    $icon_search.click(function () {
        getCity();
    })


    $('#angle-icon').click(function () {
        $content.hide();
        $divSearch.hide();
        $card.removeClass('dry-card');
        $card.addClass('dry-card-info');
        $results.show();
        $rodape.hide();
    });

    $('#angle-icon-left').click(function () {
        $content.show();
        $divSearch.show();
        $card.addClass('dry-card');
        $card.removeClass('dry-card-info');
        $results.hide();
        $rodape.show();

    });

    function clearStyle() {
        $card.removeClass();
        $weather.removeClass();
        $body.removeClass();
        $input_search.removeClass();
        $input_search.addClass('input-search-init');
        $porcent.removeClass();
        $humidity.removeClass();
        $words.removeClass();
        $info.removeClass();
        $simbol.removeClass();
        $results.removeClass();
        $results.addClass("none");
        $content.addClass("none");
        $rodape.addClass("none");
        $errorMsg.addClass("none");
    }

    function normalHumidity() {

        $('#card').addClass("normal-card");
        $('body').addClass("normal-body");
        $('#input-search').addClass("input-search-normal");
        $('#results').addClass("normal-results");
        $('#weather').addClass("normal-weather");
        $('#titleWeather').text(`Umidade ideal`);
        $('#words').html(`Sem <span>frizz</span>`);
        $('#porcent').addClass("color-normal");
        $('#humidity').addClass("color-normal");
        $('#words').addClass("normal-words");
        $('#info').addClass("normal-info");
        $('#simbol').addClass("normal-simbol");
        $('#info').html(`<span>BOAS CONDIÇÕES! </span>
            <p>Fios alinhados</p>
            <p>Cachos definidos</p>
            <p>Poucos nós</p>`);
        $('#simbol').html(` <img src="img/ya.png">`);
    }


    function highHumidity() {
        let light = "#eaf8f8";
        let lightBlue = "#97d6ac";

        $card.addClass("wet-card");
        $body.addClass("wet-body");
        $input_search.addClass("input-search-wet");
        $results.css("background-color",light);
        $weather.addClass("wet-weather");
        $titleWeather.text(`Umidade alta`);
        $words.html(`Frizz!`);
        $porcent.css("color",light);
        $humidity.css("color",light);
        $words.css("color",light);
        $info.css("background-color",lightBlue);
        $info.html(`<span>ATENÇÃO EM: </span>
        <p>Aumento do frizz</p>
        <p>Indefinição</p>
        <p>Emaranhamento dos fios</p>`);
        $simbol.addClass("wet-simbol");
        $simbol.html(` <img src="img/guarda.png">`);
    }


    function lowHumidity() {
        let light = "#eaf8f8";
        let salmon = "#ddc7af"

        $card.addClass("dry-card");
        $body.addClass("dry-body");
        $input_search.removeClass();
        $input_search.addClass("input-search-dry");
        $porcent.addClass("color-dry");
        $humidity.addClass("color-dry");
        $results.css("background-color",light);
        $weather.addClass("dry-weather");
        $words.css("color",light);
        $words.html(`Frizz!`);
        $titleWeather.text(`Baixa umidade`);
        $info.css("background-color",salmon);
        $simbol.addClass("dry-simbol");
        $info.html(`<span>ATENÇÃO EM:</span>
        <p>Descamação do couro cabeludo</p>
        <p>Ruptura dos fios</p>
        <p>Ressecamento e porosidade</p>`);
        $simbol.html(` <img src="img/cacto.png">`);
    }



});


