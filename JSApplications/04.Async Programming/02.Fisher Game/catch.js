function attachEvents(){


    $('.load').click(requestCatches);
    $('.add').click(postCatch);

    const auth = {'Authorization': 'Basic ' + btoa('user' + ':' + 'pass')};

    const aside = $('#aside');
    const main = $('#main');
    const catches = $('#catches');



    const anglerInAside = $('#aside .angler');
    const weightInAside = $('#aside .weight');
    const speciesInAside = $('#aside .species');
    const locationInAside = $('#aside .location');
    const baitInAside = $('#aside .bait');
    const captureInAside = $('#aside .captureTime');

    function requestCatches() {
        catches.empty();
        let req = {
            method:'GET',
            url: `https://baas.kinvey.com/appdata/kid_Sya8expcz/biggestCatches`,
            headers: auth,
            success: displayData,
            error: handleError
        };
        $.ajax(req)
    }

    function postCatch() {
        let data = JSON.stringify({angler:`${anglerInAside.val()}`,
            weight: Number(weightInAside.val()),
            species:`${speciesInAside.val()}`,
            location:`${locationInAside.val()}`,
            bait:`${baitInAside.val()}`,
            captureTime: Number(captureInAside.val())})
        anglerInAside.val(' ');
        weightInAside.val(' ');
        speciesInAside.val(' ');
        locationInAside.val(' ');
        baitInAside.val(' ');
        captureInAside.val(' ');
        let req = {
            method:'POST',
            url: `https://baas.kinvey.com/appdata/kid_Sya8expcz/biggestCatches`,
            headers: auth,
            contentType: 'application/json',
            data,
            success: createFish,
            error: handleError
        };
        $.ajax(req)
    }

    function displayData(data) {
        data.forEach(fish=>{
            createFish(fish)
        })
    }

    function createFish(fish) {
        let id = fish._id;
        let angler = fish.angler;
        let weight = Number(fish.weight);
        let species = fish.species;
        let location = fish.location;
        let bait = fish.bait;
        let captureTime = Number(fish.captureTime);
        let container = $(`<div class="catch" data-id="${id}">`);
        let bodyOfFish = $(`<label>Angler</label>
            <input type="text" class="angler" value="${angler}"/>
            <label>Weight</label>
            <input type="number" class="weight" value="${weight}"/>
            <label>Species</label>
            <input type="text" class="species" value="${species}"/>
            <label>Location</label>
            <input type="text" class="location" value="${location}"/>
            <label>Bait</label>
            <input type="text" class="bait" value="${bait}"/>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${captureTime}"/>`);

        container
            .append(bodyOfFish)
            .append($(`<button class="update">Update</button>`).click(updateTheData))
            .append($(`<button class="delete">Delete</button>`).click(deleteTheData));
        container.appendTo(catches)
    }

    function deleteTheData() {
        let fish = $(this).closest('.catch');
        let id = fish.attr('data-id');

        fish.remove();
        let req = {
            method: 'DELETE',
            url: `https://baas.kinvey.com/appdata/kid_Sya8expcz/biggestCatches/${id}`,
            headers: auth,
            error: handleError
        }
        $.ajax(req)
    }

    function updateTheData() {
        let fish = $($(this).closest('.catch'));

        let angler= fish.find('.angler').val();
        let weight = Number(fish.find('.weight').val());
        let species = fish.find('.species').val();
        let location = fish.find('.location').val();
        let bait = fish.find('.bait').val();
        let captureTime = fish.find('.captureTime').val();

        let data = JSON.stringify({angler,
            weight,
            species,
            location,
            bait,
            captureTime
        })
        let id = fish.attr('data-id');
        let req = {
            method: 'PUT',
            url: `https://baas.kinvey.com/appdata/kid_Sya8expcz/biggestCatches/${id}`,
            data,
            contentType: 'application/json',
            headers: auth,
            error: handleError
        }
        $.ajax(req)
    }

    function handleError(reason) {
        console.log(reason)
    }
}
