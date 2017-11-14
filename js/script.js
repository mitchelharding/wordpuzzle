$(document).ready(function(){

    $("form#form-group").submit(function(event){
      event.preventDefault();

       var userInput = $("input#userSentence").val();

      for (var i = 0; i < userInput.length; i++){

      return chars.substr(Math.floor(Math.random() * userInput.length) 1)

      }

      
      var newSentence = sentence.replace(rchar, "-");


      $(".puzzleResult").text(newSentence);

      $("form#form-group").hide();

    });
  });
