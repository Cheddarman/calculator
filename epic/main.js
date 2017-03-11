$(document).ready(function(){
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
  $("#dot").on("click", function(){
    $("#display").append(".")
  })
})











