
var each = function (coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    }
    else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}

var filter = function (array, predicate) {
    var acc = [];
    each(array, function (e, i) {
        if (predicate(e, i)) {
            acc.push(e)
        }
    })
    return acc;
}


function makeplate (name,image_url,category){

    return { name: name,
        image_url : image_url,
        category : category
    }

}

var pasta = makeplate ("pasta","images/Puttanesca.jpg","PASTA")
var fish = makeplate ("fish","images/Fish_plate.jpeg","FISH")
var meat = makeplate ("meat","images/meat.jpeg","MEAT")
var sweets = makeplate ("sweets","images/sweets.jpg","SWEETS")
var pizza = makeplate("pizza","images/pizza.jpeg","PIZZA")

var arrayofplates = [pasta, fish , meat , sweets , pizza]

function filterByCategory(query) {
    return filter (arrayofplates, function (element){
        return element.category .substr(0,query.length).toLowerCase() === query.toLowerCase()
    })
}


var $conatiner = $('#container')

        function display (arrayofplates) {
            each(arrayofplates, function (element) {
                $('#container').append(`<div class="item">
                <img src="${element.image_url}" alt="${element.name}">
                <div class="name">
                    <h2>${element.name}</h2>
                </div>
            </div>`);
        });
    }
    

    $conatiner .click(function () {
        display(arrayofplates)
    })   

    $("#filterButton").click(function () {
            var query = $("#categoryInput").val();
            var filteredResults = filterByCategory(query);

            // Display filtered results in the #resultFilter div
            if (filteredResults.length > 0) {
                display(filteredResults);
            } else {
                $resultFilter.append("<p>No results found.</p>");
            }
        });