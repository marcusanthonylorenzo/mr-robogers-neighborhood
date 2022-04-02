//Business Logic

function robotTalk(input){
  console.log(input);
  //starting statements
  const wordSubs = ["Beep", "Boop", "Won't you be my neighbor?"];

  //store main array in const
  const arrayIndexedInput = indexInput(input);
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
    let pushedArray = [];
    console.log(arrayIndexedInput);

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
        }
      } else {
        //create subarray via str conversion
        let strNum = arrayIndexedInput[i].toString();
        let digitArray = strNum.split("");
        console.log(digitArray);
        pushedArray.push(digitArray);
        console.log(pushedArray);

        //loop through subarrays to read each digit
        for (let j = 0; j < pushedArray[i][j].length; j++) {
          if (pushedArray[i][j] === 1){
            //splice to replace current position with string.
            pushedArray.splice(pushedArray[i], 1, wordSubs[0]);
          };
        }
        
      }
    }
    console.log(pushedArray);
    return pushedArray;
  };

  function arrayToString(item){
    let newArray = item.join(", ");
    console.log(newArray);
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