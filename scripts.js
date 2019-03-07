$(document).ready(function() {
  //     var age = parseInt(prompt("type in your age?"));
  //     if (age >= 21) {
  //       $("#background").show();
  //     } else {
  //       $("#under21").hide();
  //     }
  //     $("#daysvacation").change(function() {
  //       image = $(this).val();
  //       $(".showImage").html('<img src="' + image + '" />');
});

$("#vacation-form").submit(function(event) {
  var person1Input = $("input#totalpeople").val();

  if (person1Input <= 3) {
    $("#snorkeling").show();
  } else if (person1Input > 3 && person1Input <= 7) {
    $("#cenote").show();
  } else {
    $("#quads").show();
  }
  event.preventDefault();
});
