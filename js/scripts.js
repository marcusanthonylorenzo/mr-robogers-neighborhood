//Business Logic
function robotTalk(input){
  console.log(input);
  // return input *3;
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