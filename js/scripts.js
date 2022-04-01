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

  // const checkOverTen = function(arrayIndexedInput){
  //   let overTen;
  //   for(let i = 0; i < arrayIndexedInput.length; i++){
  //     console.log(arrayIndexedInput[i]);
  //     const arrayId1 = arrayIndexedInput[i];
  //     const arrayId2 = arrayId1.slice(i);
  //     if (arrayId2.includes(1)){
  //       console.log(i);
  //       console.log(arrayId1);
  //       console.log(arrayId2);
  //     }
  //   }
  //   return overTen;
  // }

  function replaceArr123(arrayIndexedInput) {
    for(let i = 0; i < arrayIndexedInput.length; i++){
      if (arrayIndexedInput[i] < 10){
        let slicedArray = [];

        if (arrayIndexedInput.includes(1)) {
          console.log(slicedArray);
          let newSlice = arrayIndexedInput.slice(0);
          console.log(i);
          console.log(newSlice);
          let pushed = slicedArray.push(newSlice);
          console.log(pushed);
          // arrayIndexedInput.splice(arrayIndexedInput.indexOf(1), 1, wordSubs[0]);
        } else if (arrayIndexedInput.includes(2)){
          // arrayIndexedInput.splice(arrayIndexedInput.indexOf(2), 1, wordSubs[1]);
        } else if (arrayIndexedInput.includes(3)){
          // arrayIndexedInput.splice(arrayIndexedInput.indexOf(3), 1, wordSubs[2]);
        }
      } else if (arrayIndexedInput[i] >= 10) {
        console.log(arrayIndexedInput);
        console.log(slicedArray);

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