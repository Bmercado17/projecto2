$(document).ready(function() {
    var age = parseInt(prompt ("what is your birth date?"));

if (age >= 21) {
 $("#background").show();
} else {
    $("#under21").show();
}
});