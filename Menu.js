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

