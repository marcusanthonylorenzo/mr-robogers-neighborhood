//Business Logic
function robotTalk(input){
  console.log(input);

  //starting statements
  const wordSubs = ["Beep", "Boop", "Won't you be my neighbor?"];

  //expressions 
  const arrayFromIndexInput = indexInput(input);
  const arrayInputString = arrayFromIndexInput.join(", ");
  
  //run iterator to count and index each number in array
  function indexInput(input){
    let arrayFromInput = [];
    for (let i = 0; i <= input; i++){
      arrayFromInput.push(i);
    }
    return arrayFromInput;
  }

  console.log(arrayFromIndexInput);
  console.log(arrayInputString);
}


//UI Logic
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();

    //selectors
    const numberInput = parseInt($("#numberInput").val());
    const display = $(".display");
    const submitBtn = $("#submit");

    //submit action
    let submit = robotTalk(numberInput);
    display.append("<p>" + submit + "</p>");
  });
});