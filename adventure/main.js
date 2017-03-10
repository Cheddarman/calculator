$(document).ready(function(){
  
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
	})
})