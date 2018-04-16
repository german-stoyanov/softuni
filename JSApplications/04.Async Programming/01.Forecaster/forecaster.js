function attachEvents(){
    const forecast = $('#forecast');
    const location = $('#location');
    const current = $('#current');
    const upcoming = $('#upcoming');
    const symbols = {
        	Sunny:'&#x2600', // ☀
	"Partly sunny":'&#x26C5',// ⛅
	Overcast:'&#x2601', // ☁
	Rain:'&#x2614', // ☂
	Degrees:'&#176',   // °
    };

    $('#submit').click(requestLocation);
    function requestForecast(code) {
        let reqToday = {
            method: 'GET',
            url: `https://judgetests.firebaseio.com/forecast/today/${code}.json`
        };
        let reqUpcoming = {
            method: 'GET',
            url: `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`
        };
        let todayP = $.ajax(reqToday);
        let upcomingP = $.ajax(reqUpcoming);
        Promise.all([todayP,upcomingP])
            .then(displayData)
            .catch(handleError)
    }

    function requestLocation() {
        let reqLocation = {
            method: 'GET',
            url: `https://judgetests.firebaseio.com/locations.json`
        };
        $.ajax(reqLocation)
            .then(findCodeForTheLocation)
            .catch(handleError);
    }

    function findCodeForTheLocation(data) {
        let code = data.filter((a)=>a.name===location.val())[0].code;
        requestForecast(code);
    }

    function displayData([dataT,dataU]) {
        current.empty();
        upcoming.empty();
        console.log(dataT);
        console.log(dataU);

        current.append($('<div class="label">Current conditions</div>'))
        upcoming.append($('<div class="label">Three-day forecast</div>'))
        displayToday(dataT);
        displayUpcoming(dataU);
        forecast.css('display','inline')
    }

    function displayUpcoming(dataU) {
        dataU.forecast.forEach(day=>{
            let symb = symbols[day.condition];
            let weather = day.condition;
            let low = day.low;
            let high = day.high;

            let spanForUpcomming = $(`<span class="upcomming">`);

            let spanForConditionSymbol = $(`<span class="symbol">${symb}</span>`);
            let spanForWeather =  $(`<span class="forecast-data">${weather}</span>`);
            let spanForTemperatures =  $(`<span class="forecast-data">${low}${symbols.Degrees}/${high}${symbols.Degrees}</span>`);

            spanForUpcomming.append(spanForConditionSymbol);
            spanForUpcomming.append(spanForTemperatures);
            spanForUpcomming.append(spanForWeather);

            spanForUpcomming.appendTo(upcoming);


        })
    }

    function displayToday(dataT) {
        let symb = symbols[dataT.forecast.condition];
        let weather = dataT.forecast.condition;
        let city = dataT.name;
        let low = dataT.forecast.low;
        let high = dataT.forecast.high;
        let spanForCondition = $(`<span class="condition">`);

        let spanForConditionSymbol = $(`<span class="condition symbol">${symb}</span>`);
        let spanForCity = $(`<span class="forecast-data">${city}</span>`);
        let spanForWeather =  $(`<span class="forecast-data">${weather}</span>`);
        let spanForTemperatures =  $(`<span class="forecast-data">${low}${symbols.Degrees}/${high}${symbols.Degrees}</span>`);

        spanForCondition.append(spanForCity);
        spanForCondition.append(spanForTemperatures);
        spanForCondition.append(spanForWeather);

        spanForConditionSymbol.appendTo(current);

        spanForCondition.appendTo(current);
    }

    function handleError(reason) {
        console.log(reason)
    }
}