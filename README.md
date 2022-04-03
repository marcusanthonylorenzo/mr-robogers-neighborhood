# _Mr. Robogers Neighborhood_

#### By _**Marcus Padilla**_

#### _Whenever Mr. Robogers translates any integer which contains 1, 2, or 3; in robot speak they translate to "Beep", "Boop", and "Won't you be my neighbor?" respectively._

## Technologies Used

* Javascript
* JQuery
* HTML
* CSS
* Git
* VSCode

## Description

_This has been a crash course in array methods, particularly: **.push**, **.split**, **.splice** (beyond curriculum), and **.join**. It has given me a greater appreciation for organization and TDD as without it, you can make very messy code. A practice using for loops and conditional statements to target specific numbers (1, 2, and 3) in multiple integers, to convert them to corresponding string values._

## Tests

Describe: robotTalk(input)

Test: "It should take user input, run for loop and count each individual number up to specified number"
Code: robotTalk(5);
Expected Output: (console:) 0, 1, 2, 3, 4, 5 
Mond
Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: robotTalk(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should convert array to string"
Code: arrayFromIndexInput.join(", ");
Expected Output: "0, 1, 2, 3, 4, 5"

Test: "It should check IF number is 1, 2, or 3, then replace with wordSubs[]"
Code: robotTalk(5);
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?", 4, 5]

Test: "It should replace 1-11 with wordSubs[i] "
Code: robotTalk(5);
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?", 4, 5]

Test: Turn multiple digit integers into array
Code: pushedArray.split("");
Expected Output: [...[1,0], [1,1], [1,2]]

Test: Sort and reverse array to read highest to lowest
Code:     let numOverTen = pushedArray[i];
          let sorted = numOverTen.sort();
          let reversed = sorted.reverse();
Expected Output: [...[2,0], [2,1], [2,2], [3,2], [4,2]];

Test: It should replace the reversed subarrays with strings from wordSubs[item]
Code:     for(let i = 0; i < arrayIndexedInput.length; i++){
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
Expected Output: [...[4,0], "Beep", "Boop", Why won't you be my neighbor?", [4,4], [4,5]...]

Test: It should eliminate duplicates in subarrays (derived from above test "It should replace the reversed subarrays...")
Code:           } else {
            reversed.push(i);
            numOverTen.splice(0,2);
            break;
          }
Expected Output: [...[40], "Beep", "Boop", Why won't you be my neighbor?", [44], [45]...]


## Setup/Installation Requirements

* Download and install Git Bash (Windows), use the terminal in your text editor, or open Terminal(Mac).
* Open Git Bash or Terminal and type:
 **cd ~/desktop**
* This will bring you to your desktop location on the command line, to receive files.
* Next, type: **git clone https://github.com/marcusanthonylorenzo/mr-robogers-neighborhood**
* Once completed, go to your desktop and find the folder with same name.
* Open index.html in your browser.
* Once your text editor is open, access "index.html" via live server or manually with your browser.


## Known Bugs

* None at current time.

## License

[MIT](https://github.com/marcusanthonylorenzo/programming-language-suggester/blob/add-license-1/LICENSE)

Copyright (c) 2022 _Marcus Padilla_
