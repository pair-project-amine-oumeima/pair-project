function createRestaurent (name,dailyTables,dailyPlates) {
    obj = {
        name:name,
        dailyTables:dailyTables,
        dailyPlates:dailyPlates,
        availableTables:dailyTables,
        remainingPlates:dailyPlates,
        reserve:reserve,
        checkout:checkout,
        newday:newday,
        income: 0
    }

    return obj
    
}




var reserve = function(){
    if  (this.remainingPlates===0 ){
        return " we don't have any plates we should start a new day  "    
    }
    else if (this.availableTables===0){
        return "we dont have  enoguh tables wait for a table to be available "
    }
    else   
this.availableTables--
this.remainingPlates--
    
    console.log(" plate served  ")
}


var checkout = function(){
    if (this.availableTables<this.dailyTables){
       return "idk what to put here "
    }
    this.availableTables++
    this.income = this.income + 10.99
    return " new table available  "
}

var newday = function(){
    this.availableTables=this.dailyTables
    this.remainingPlates=this.dailyPlates
    console.log("here is your income of yesterday " + this.income )
    this.income = 0
}

var resto1 = createRestaurent("bonjorno",8,16)

$()




