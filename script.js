$('#form').submit(function() {
  if( !$('#txt').val()){
    $("#textarea").html("please ask a question!");
    return false;
  }else{
    $("#textarea").html("");
    var audio = new Audio('STOPLURKING.mp3');
    audio.play();
    sleep(3000);
    $("#textarea").html("no u.");
    return false;
  }

});

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
