**Guessing Game**

Write a function called ***guessingGame*** which returns a function that allows you to guess a random whole number between 0 and 99. Every time you create a new game, it should select a *new* random number, and keep it secret from the player.

Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.

**Bank Account**

Write a function called ***createAccount*** which creates a bank account given a PIN number and an initial deposit amount. The return value should be an object with four methods on it:

- ***checkBalance***: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
- ***deposit***: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
- ***withdraw***: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
- ***changePin***: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)

**Curried Add**

Write a function called ***curriedAdd***. If you give this function a number, it returns a new function to you. If you give this function no arguments, it returns the total of all the numbers you’ve passed to it so far.
