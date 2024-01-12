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
        displaycont:displaycont,
        income: 0
    }

    return obj
    
}




var reserve = function(){
    if  (this.remainingPlates===0 ){
      return   $(".center").html("we don't have enough paltes let's start a new day ") 
    }
    else if (this.availableTables===0){
         return $(".center").html("we don't have enough tables don't accept any reservation until one is available ")
    }
    else   
this.availableTables--
this.remainingPlates--
    
 
}


var checkout = function(){
    if(this.availableTables>this.dailyTables){
        
        $(".center").html("we don't have anything to checkout")
    }
    this.availableTables++
    this.income = this.income + 10.99
  
}

// displays the remaining tables  and remaining plates 
var displaycont = function (){
    console.log(this)
    $(".analyse").html(`you have ${this.remainingPlates}  plates left  and   ${this.availableTables} tables left  `)
}
 // resets everything and it show's the income 
var newday = function(){
    this.availableTables=this.dailyTables
    this.remainingPlates=this.dailyPlates
    $("body").html(`<h3 class='closed' id="clo" >we are closed here is your income ${Math.floor(this.income)} $ </h3>` )
    this.income = 0
}

var resto1 = createRestaurent("bonjorno",8,16)  // create our instance 




///  grabs the input   and it should be .table1 until .table8  adds a picture to  mark it as reserved 

$("#grabres").on("click",function(){
    tableNumber = $('#resinput').val()
    $(`${tableNumber}`).html("<img class='croped' src='https://www.ukpos.com/media/catalog/product/r/s/rspsitu.png' >")
    $(".announcer").html(`${tableNumber} is reserved`)

    resto1.reserve()
    
    
    console.log(tableNumber)
 })


 ///  grabs the input   and it should be .table1 until .table8  to checkout and make the table available to be reserved 
 $("#grabchec").on("click",function(){
    checkoutNumber = $('#checinput').val()
    $(`${checkoutNumber}`).html("")
    $(".announcer").html(`${checkoutNumber} is available`)
    resto1.checkout()
    
    console.log(checkoutNumber)
 })





//"<img src='/images/Fish_plate.jpeg' >"








