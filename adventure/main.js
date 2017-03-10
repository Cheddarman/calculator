$(document).ready(function(){
  /*
	$("#add").on("click", function(){
    var val1 = $("#num_one").val()
    var val2 = $("#num_two").val()
    $("#answer").val(Number(val1) + Number(val2))
	})
	$("#subtract").on("click", function(){
    var val1 = $("#num_one").val()
    var val2 = $("#num_two").val()
    $("#answer").val(Number(val1) - Number(val2))
	})
	$("#multiply").on("click", function(){
    var val1 = $("#num_one").val()
    var val2 = $("#num_two").val()
    $("#answer").val(Number(val1) * Number(val2))
	})
	$("#divide").on("click", function(){
    var val1 = $("#num_one").val()
    var val2 = $("#num_two").val()
    $("#answer").val(Number(val1) / Number(val2))
	})*/




  $("#clear").on("click", function(){
    $("#display").html("")
  })

  
  $(".number").on("click", function(){
    var selection = $(this).html();
    $("#display").append(selection)
  })
  $(".opperator").on("click", function(){
    var selection = $(this).html();
    $("#display").append(selection)
  })
  $("#equals").on("click", function(){
    var result = eval($("#display").html())
    $("#display").html(result)
  })
  /*
  $("#two").on("click", function(){
    $("#display").html("2")
  })
  $("#three").on("click", function(){
    $("#display").html("3")
  })
  $("#four").on("click", function(){
    $("#display").html("4")
  })
  $("#five").on("click", function(){
    $("#display").html("5")
  })
  $("#six").on("click", function(){
    $("#display").html("6")
  })
  $("#seven").on("click", function(){
    $("#display").html("7")
  })
  $("#eight").on("click", function(){
    $("#display").html("8")
  })
  $("#nine").on("click", function(){
    $("#display").html("9")
  })
  $("#zero").on("click", function(){
    $("#display").html("0")
  })
  $("#dot").on("click", function(){
    $("#display").html(".")
  })
  */
})











