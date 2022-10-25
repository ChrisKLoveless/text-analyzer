Describe: wordCounter()

Test: "It should return 1 for each word in the passage."

Code:  
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 1 for each word in the passage."
Code:
const text = 'hello there';
wordCounter(text);
Expected Output: 2

Test: 'It should return 0 for an empty string'
Code: wordCounter('');
Expected Output: 0

Test: 'It should trim whitespace from string'
Code: 
const text = '  hello this is whitespaced   ';
wordCounter(text);
Expected Output: 4

Test: 'It should determine integers from strings'
Code: 
const text = 'The number 4 will not be counted';
wordCounter(text)'
Expected Output: 6

Describe: numberOfOccurencesInText()

Test:'It should return 0 occurences of an empty string'
Code: const text = '';
const word word = "red";
numberOfOccurencesInText(word, text);
Expected Output: 0

Test: 'It should return 1 occurences of a word when the word and text are the same'
Code:
const text = 'red';
const text = 'red';
numberOfOccurencesInText(word, text);
Exepcted Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Describe: removeBadWords()

Test: "it should remove the bad word from the text"
Code:
const word = 'zoinks';
const text = 'Your are a zoinks';
removeBadWords(words, text);
Expected Output: 'You are a '
