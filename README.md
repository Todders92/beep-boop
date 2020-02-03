# _Beep Boop_

#### _A web application for translating numbers_ _24 January 2020_

#### By _**Todd Walraven**_

## Description

_This webpage has the user input a number, and lists out all the numbers leading up to the input number in order. For any numbers with a 3 in it, the number is replaced with the phrase "I'm sorry Dave, I'm afraid I can't do that. For any numbers with a 2 in it, the number is replaced with the phrase "Boop". For any numbers with a 1 in it, the number is replaced with the phrase "Beep!". The rule that takes precident goes in order of importance from 3 to 2 to 1._

## Specs

1. _The program returns a range of numbers from 0 to the users inputted numbers_
    *	_Example Input: 5_
    *   _Example Output: 0, 1, 2, 3, 4, 5_ 

2. _The program recognizes the number 3 in the return of numbers and changes it to the phrase "I'm sorry Dave. I'm afraid I can't do that."_
    *	_Example Input: 5_
    *   _Example Output: 0, 1, 2, I'm sorry Dave. I'm afraid I can't do that., 4, 5_

3. _The program recognizes the number 2 in the return of numbers and changes it to the phrase "Boop!"_
    *	_Example Input: 4_
    *	_Example Output: 0, 1, Boop, I'm sorry Dave. I'm afraid I can't do that., 4_

4. _The program recognizes the number 1 in the return of numbers and changes it to the phrase "Beep!"_
    *	_Example Input: 5_
    *	_Example Output: 0, Beep!, Boop!, I'm sorry Dave. I'm afraid I can't do that., 4, 5_

5. _if the output number in the list of numbers contains both a 3 and a 2, the rules for a 3 take precident_  
    *   _example Input: 23_
    *   _Example Output: Boop!(20), Beep!(21), Boop!(22), Im sorry Dave. I'm afraid I can't do that(23)_
    
6. _if the output number in the list of numbers contains both a 2 and a 1, the rules for a 2 take precident_  
    *   _Example Input: 12_
    *   _Example Output: 9, Beep!(10), Beep!(11), Boop!(12)_
7. _if the output number in the list of numbers contains both a 1 and a 3, the rules for a 3 take precident_  
    *   _example Input: 23_
    *   _Example Output: Boop!(20), Beep!(21), Boop!(22), Im sorry Dave. I'm afraid I can't do that(23)_
8. _User can submit the form multiple times for new results_
    * _Example Input: 30:submit, 23:submit_
    * _Example Output: boop, boop, boop, I'm sorry Dave I'm afraid I can't do that._
## Known Bugs
_none yet..._

## Setup/Installation Requirements

### If Using GitBash or terminal

* _Clone this repository by entering, in the terminal, the prompt "git clone" followed by the URL to this repository._
* _Use Terminal to navigate to the correct directory (using the prompt "cd {repository-name}")._
* _Open in Visual Studio Code using the terminal prompt "code ."_
* _Open index.html in a browser of your choice._

### If Using Web Browser

* _Download this repository by clicking the green download button_
* _Navigate to the directory_
* _open the directory_
* _Double click on index.html to open in web broweser_

## Technologies Used

* _VSCode_
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _Jquery_
* _GitHub_

### License

_This application is licensed under the GPL license_

Copyright (c) 2020 **_Todd Walraven*_**