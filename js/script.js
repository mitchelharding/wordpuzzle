$(document).ready(function(){

  $("form.form-group").submit(function(event){

    var userWords = $("input#userSentence").val();

    var userInput = userWords.toString(function(userWord){
      $("input#userSentence" + userWord).toString(val());

    });
        alert(userInput);
        event.preventDefault();
  });
});
