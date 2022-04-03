//Business Logic
function robotTalk(input){
  console.log(input);
  const wordSubs = ["Beep", "Boop", "Won't you be my neighbor?"];
  const arrayIndexedInput = indexInput(input);
  const replaceArray = replaceArr123(arrayIndexedInput);
  const stringConversion = replaceArray.join(",");

  function indexInput(input){
    let arrayFromInput = [];
    for (let i = 0; i <= input; i++){
      arrayFromInput.push(i);
    }
    return arrayFromInput;
  }

  function replaceArr123(arrayIndexedInput) {
    let pushedArray = [];

    for(let i = 0; i < arrayIndexedInput.length; i++){
      if (arrayIndexedInput[i] < 10) {
        if (arrayIndexedInput[i] === 1) {
          console.log(i);
          console.log(arrayIndexedInput[i]);
          pushedArray.push(wordSubs[0]);
        } else if (arrayIndexedInput[i] === 2) {
          pushedArray.push(wordSubs[1]);
        } else if (arrayIndexedInput[i] === 3) {
          pushedArray.push(wordSubs[2]);
        } else {
          pushedArray.push(i);
        };
      } else {
        //create subarray via str conversion
        let strNum = arrayIndexedInput[i].toString();
        let digitArray = strNum.split("");
        pushedArray.push(digitArray);
        console.log(pushedArray);

        //loop through subarrays, sort and reverse
        for (let j = 0; j < pushedArray[i].length; j++) {
          let numOverTen = pushedArray[i];
          let sorted = numOverTen.sort(function (a, b) {
            return a-b
          });
          let reversed = sorted.reverse();
          console.log(reversed);

          //conditions
          if (reversed.includes('3')){
            reversed.splice(pushedArray[i], i, wordSubs[2]);
          } else if (reversed.includes('2')){
            reversed.splice(pushedArray[i], i, wordSubs[1]);
          } else if (reversed.includes('1')){
            reversed.splice(pushedArray[i], i, wordSubs[0]);
          } else {
            reversed.push(i);
            console.log(pushedArray[i][j]);
            numOverTen.splice(0,2);
            console.log(pushedArray[i]);
            break;
          }
        }
      }
    }
    return pushedArray;
  };
  return stringConversion;
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
    let strConv = robotTalk(numberInput);
    display.append("<p>" + strConv + "</p>");
  });
});