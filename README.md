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

_A practice using for loops and conditional statements to target specific numbers (1, 2, and 3) in multiple integers, to convert them to corresponding string values._

## Tests

Describe: robotTalk(input)

*Store inputs AND output 
[ "Beep" instead of 1,
  "Boop" instead of 2,
  "Won't you be my neighbor?" instead of 3]; -->

Test: "It should take user input, run for loop and count each individual number up to specified number"
Code: robotTalk(5);
Expected Output: (console:) 0, 1, 2, 3, 4, 5 

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
Code: 



## Setup/Installation Requirements

* Download and install Git Bash (Windows), use the terminal in your text editor, or open Terminal(Mac).
* Open Git Bash or Terminal and type:
 **cd ~/desktop**
* This will bring you to your desktop location on the command line, to receive files.
* Next, type: **git clone https://github.com/marcusanthonylorenzo/mr-robogers-neighborhood**
* Once completed, type **cd programming-language-suggester**
* Open index.html in your browser.
* Once your text editor is open, access "index.html" via live server or manually with your browser.


## Known Bugs

* None at current time.

## License

[MIT](https://github.com/marcusanthonylorenzo/programming-language-suggester/blob/add-license-1/LICENSE)

Copyright (c) 2022 _Marcus Padilla_
