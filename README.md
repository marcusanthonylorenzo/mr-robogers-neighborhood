TESTS:

Describe: robotTalk(input)

// *Store inputs AND output ["Beep", "Boop", "Won't you be my neighbor?"];

Test: "It should take user input, run for loop and count each individual number up to specified number"
Code: robotTalk(5);
Expected Output: (console:) 0, 1, 2, 3, 4, 5

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: robotTalk(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: robotTalk(5);
Expected Output: [0, 1, 2, 3, 4, 5]


Test:  If a user inputs a 13, the program should display a list of values starting with 0 to the user's inputted number, with the numbers 1, 2, 3, 10, 11, 12, 13 and 14 substituted with the correct phrase.
Code: robotTalk(14);
Expected Output: "0", "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Boop", "Won't you be my neighbor?", "Beep!"

