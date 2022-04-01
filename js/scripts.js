//Business Logic

function robotTalk(input){
  console.log(input);
  //starting statements
  const wordSubs = ["Beep", "Boop", "Won't you be my neighbor?"];
  //store main array in const
  const arrayIndexedInput = new indexInput(input);
  console.log(arrayIndexedInput);
  //replaceArray
  const replaceArray = replaceArr123(arrayIndexedInput);
  console.log(replaceArray);
    //convert array to str **convert in JQuery, or after robotTalk??
  const arrToStrConvert = arrayToString(replaceArray);
  console.log(arrToStrConvert);

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
      //work inside this loop as well, to check >10.
      if (arrayIndexedInput < 10){
        if (arrayIndexedInput.includes(1)) {
          arrayIndexedInput.splice(arrayIndexedInput.indexOf(1), 1, wordSubs[0]);
        } else if (arrayIndexedInput.includes(2)){
          arrayIndexedInput.splice(arrayIndexedInput.indexOf(2), 1, wordSubs[1]);
        } else if (arrayIndexedInput.includes(3)){
          arrayIndexedInput.splice(arrayIndexedInput.indexOf(3), 1, wordSubs[2]);
        }
      } else if (arrayIndexedInput >= 10){
        const toString = arrayIndexedInput[i].toString();
        const toArray = toString.split(" ");
        console.log(toArray);

        for (let j = 0; j < toArray.length; j++){ 
          if (arrayIndexedInput.includes(1)) {
            arrayIndexedInput.splice(arrayIndexedInput.indexOf(1), 1, wordSubs[0]);
          } else if (arrayIndexedInput.includes(2)){
            arrayIndexedInput.splice(arrayIndexedInput.indexOf(2), 1, wordSubs[1]);;
          } else if (arrayIndexedInput.includes(3)){
            arrayIndexedInput.splice(arrayIndexedInput.indexOf(3), 1, wordSubs[2]);
          }
        };
      };
      return arrayIndexedInput;
    };

  }

  function arrayToString(arrayIndexedInput){
    let newArray = arrayIndexedInput.join(", ");
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