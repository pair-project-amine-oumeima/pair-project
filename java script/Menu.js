

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

var pasta1 = makeplate ("Puttanesca","../images/Puttanesca1.jpeg","PASTA")
var pasta2 = makeplate ("Pink-Sauce-Pasta","../images/Pink-Sauce-Pasta.jpg","PASTA")
var pasta3 = makeplate ("sausage_pasta","../images/sausage_pasta.jpg","PASTA")
var fish1 = makeplate ("fish","../images/Fish_plate.jpeg","FISH")
var fish2 = makeplate ("Salmon","../images/salmon.jpg","FISH")
var fish3 = makeplate ("Shrimp","../images/shrimp.jpg","FISH")
var meat1 = makeplate ("meat","../images/meat.jpeg","MEAT")
var meat2 = makeplate ("Tagliata meat with grilled vegetables","../images/Tagliata meat with grilled vegetables.jpg","MEAT")
var meat3 = makeplate ("Fillet Steaks","../images/Fillet Steaks.jpg","MEAT")
var sweets1 = makeplate ("sweets","../images/sweets.jpg","SWEETS")
var sweets2 = makeplate ("strawbery","../images/strawbery.jpg","SWEETS")
var pizza1= makeplate("Italian-pepperoni-pizza","../images/Italian-pepperoni-pizza.jpg","PIZZA")
var pizza2 = makeplate("pizza","../images/pizza_2.jpeg","PIZZA")
var pizza3 = makeplate("pizza-vegetarienne","../images/pizza-vegetarienne.jpg","PIZZA")

var arrayofplates = [pasta1,pasta2,pasta3, fish1,fish2,fish3, meat1,meat2,meat3 , sweets1,sweets2 , pizza1, pizza2,pizza3]

function filterByCategory(query) {
    return filter (arrayofplates, function (element){
        return element.category .substr(0,query.length).toLowerCase() === query.toLowerCase()
    })
}


var $conatiner = $('#container')
var showMenu = $('.Menu')

        function display (arrayofplates) {
            $conatiner.empty("")
            each(arrayofplates, function (element) {
                
                $('#container').append(`<div class="item">
                <img src="${element.image_url}" alt="${element.name}">
                <div class="name">
                    <h2>${element.name}</h2>
                </div>
            </div>`);
        });
    }

    

    showMenu .click(function () {
        display(arrayofplates)
    })   

    $("#filterButton").click(function () {
            var query = $("#categoryInput").val();
            var filteredResults = filterByCategory(query);
        
            // Display filtered results in the #resultFilter div
            if (filteredResults.length > 0) {
                display(filteredResults);
            } else {
                $resultFilter.append("<p> No results found. </p>");
            }
        });