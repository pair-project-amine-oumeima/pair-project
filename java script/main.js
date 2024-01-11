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
      return   $(".center").html("we don't have enoough paltes let's start a new day ") 
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

var newday = function(){
    this.availableTables=this.dailyTables
    this.remainingPlates=this.dailyPlates
    $("html").html(`<h3 class='closed' >we are closed here is your income ${Math.floor(this.income)} $ </h3>` )
    this.income = 0
}

var resto1 = createRestaurent("bonjorno",8,16)




$(".plates").on("click", function(event){
    $(".analyse").html(`you have ${this.dailyPlates}  plates left  and   ${this.availableTables} tables left  `)
})







//"<img src='/images/Fish_plate.jpeg' >"




$(".table1").on("click",function(event){
    $(".announcer").html("Table1 is reserved")
    $(".center").html("") 
    $(".box1").html("<img class='croped' src='/images/Fish_plate.jpeg' >")
})
$(".table2").on("click",function(event){
    $(".announcer").html("Table2 is reserved")
    $(".box2").html("<img class='croped' src='/images/meat.jpeg' >")
})
$(".table3").on("click",function(event){
    $(".announcer").html("Table3 is reserved")
    $(".box3").html("<img class='croped' src='/images/pizza.jpeg' >")
})
$(".table4").on("click",function(event){
    $(".announcer").html("Table4 is reserved")
    $(".box4").html("<img class='croped' src='/images/puttanesca.jpg' >")
})
$(".table5").on("click",function(event){
    $(".announcer").html("Table5 is reserved")  
    $(".box5").html("<img class='croped' src='/images/sweets.jpg' >")                      /// to annouce reservation of a table 
})
$(".table6").on("click",function(event){
    $(".announcer").html("Table6 is reserved")
    $(".box6").html("<img class='croped' src='/images/pizza.jpeg' >")
})
$(".table7").on("click",function(event){
    $(".announcer").html("Table7 is reserved")
    $(".box7").html("<img class='croped' src='/images/pizza.jpeg' >")
})
$(".table8").on("click",function(event){
    $(".announcer").html("Table8 is reserved")
    $(".box8").html("<img class='croped' src='/images/pizza.jpeg' >")

})
  







$(".ctable1").on("click",function(event){
    $(".announcer").html("Table1 is available")
    $(".box1").html("")
})
$(".ctable2").on("click",function(event){
    $(".announcer").html("Table2 is available")
    $(".box2").html("")
})
$(".ctable3").on("click",function(event){
    $(".announcer").html("Table3 is available")
    $(".box3").html("")
})
$(".ctable4").on("click",function(event){
    $(".announcer").html("Table4 is available") 
    $(".box4").html("")                                                      // to announce  the avability of a table 
})
$(".ctable5").on("click",function(event){
    $(".announcer").html("Table5 is available")
    $(".box5").html("")
})
$(".ctable6").on("click",function(event){
    $(".announcer").html("Table6 is available")
    $(".box6").html("")
})
$(".ctable7").on("click",function(event){
    $(".announcer").html("Table7 is available")
    $(".box7").html("")
})
$(".ctable8").on("click",function(event){
    $(".announcer").html("Table8 is available")
    $(".box8").html("")
})



