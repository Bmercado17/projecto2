$(document).ready(function() {
    var age = parseInt(prompt ("type in your age?"));
   
    if (age >= 21) {
        $("#background").show();
        if (age <= 21) {
            $("#under21").hide();
        }
    } else {
        $("#under21").show();
    }


    $('#daysvacation').change(function() {
        image = $(this).val();

        $('.showImage').html('<img src="'+image+'" />');
    });
    
});

