//Business Logic

function robotTalk(input){
  console.log(input);
  //starting statements
  const wordSubs = ["Beep", "Boop", "Won't you be my neighbor?"];
  //store main array in const
  const arrayIndexedInput = indexInput(input);
  //convert array to str **convert in JQuery, or after robotTalk??
  console.log(arrayIndexedInput);
  const replaceUnderTen = replaceStr123(arrayIndexedInput);

  const convertToString = arrayIndexedInput.join(", ");

  //replace 1,2,3 in array with wordSubs[i];

  //run iterator to count and index each number in array
  function indexInput(input){
    let arrayFromInput = [];
    for (let i = 0; i <= input; i++){
      arrayFromInput.push(i);
    }
    return arrayFromInput;
  }

  //check and replace numbers with str <10
  function replaceStr123(arrayIndexedInput) {
    let newArray;
    for(let i = 0; i < 10; i++){
      //work inside this loop as well, to check >10.
      if (arrayIndexedInput.includes(1)) {
        arrayIndexedInput.splice(arrayIndexedInput.indexOf(1), 1, wordSubs[0]);
      } else if (arrayIndexedInput.includes(2)){
        arrayIndexedInput.splice(arrayIndexedInput.indexOf(2), 1, wordSubs[1]);
      } else if (arrayIndexedInput.includes(3)){
        arrayIndexedInput.splice(arrayIndexedInput.indexOf(3), 1, wordSubs[2]);
      } else {
        return newArray;
      }
    };
  }


  console.log(arrayIndexedInput);
  console.log(convertToString);
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