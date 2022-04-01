//Business Logic

function robotTalk(input){
  console.log(input);
  //starting statements
  const wordSubs = ["Beep", "Boop", "Won't you be my neighbor?"];
  const finalArray = [];

  //store main array in const
  const arrayIndexedInput = new indexInput(input);
  //replaceArray
  const replaceArray = replaceArr123(arrayIndexedInput);
    //convert array to str **convert in JQuery, or after robotTalk??
  const arrToStrConvert = arrayToString(replaceArray);

  //run iterator to count and index each number in array
  function indexInput(input){
    let arrayFromInput = [];
    for (let i = 0; i <= input; i++){
      arrayFromInput.push(i);
    }
    return arrayFromInput;
  }

  function replaceArr123(arrayIndexedInput) {
    for(let i = 0; i < arrayIndexedInput.length; i++){
      if (arrayIndexedInput[i] < 10){
        console.log(i);
        console.log(arrayIndexedInput);
        console.log(arrayIndexedInput[i]);
        if (arrayIndexedInput.includes(1)) {
          arrayIndexedInput.splice(arrayIndexedInput.indexOf(1), 1, wordSubs[0]);
        } else if (arrayIndexedInput.includes(2)){
          arrayIndexedInput.splice(arrayIndexedInput.indexOf(2), 1, wordSubs[1]);
        } else if (arrayIndexedInput.includes(3)){
          arrayIndexedInput.splice(arrayIndexedInput.indexOf(3), 1, wordSubs[2]);
        } 
      } else if (arrayIndexedInput[i] >= 10) {
        let copiedArray = arrayIndexedInput.slice();
        console.log(copiedArray);
        let arrayToStr = copiedArray.join(" ");
        console.log(arrayToStr);

        if (arrayToStr.includes(1)) {
          arrayIndexedInput.splice(arrayToStr.indexOf(1), 1, wordSubs[0]);
          console.log(arrayToStr);
        } else if (arrayIndexedInput.includes(2)){
          arrayIndexedInput.splice(arrayToStr.indexOf(2), 1, wordSubs[1]);
          console.log(arrayToStr);
        } else if (arrayIndexedInput.includes(3)){
          arrayIndexedInput.splice(arrayToStr.indexOf(3), 1, wordSubs[2]);
          console.log(arrayToStr);
        }

      }
    };
    return arrayIndexedInput;
  }

  function arrayToString(element){
    let newArray = element.join(", ");
    return newArray;
  };
};



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