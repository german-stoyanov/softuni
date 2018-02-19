function attachEventsListeners() {
    let objWithValues = {
        km:1000,
        m:1,
        cm:0.01,
        mm:0.001,
        mi:1609.34 ,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254
    }
    let button = document.getElementById('convert');
    button.addEventListener('click',function () {
        let optionFrom = document.getElementById('inputUnits').value;
        let optionTo = document.getElementById('outputUnits').value;
        let input = document.getElementById('inputDistance').value;
        let result = document.getElementById('outputDistance');
        result.value = objWithValues[optionFrom]*input/objWithValues[optionTo];
    })

}
