$(document).ready(function(){
  
	$("#add").on("click", function(){
    var val1 = $("#num_one").val()
    var val2 = $("#num_two").val()
    $("#answer").val(Number(val1) + Number(val2))
	})
})