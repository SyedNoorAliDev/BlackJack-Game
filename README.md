# BlackJack-Game

This repository contains the code for a simple Black Jack game implemented using HTML, CSS, and JavaScript. The game allows players to play rounds of Black Jack by drawing cards and keeping track of their score. The repository includes the following files:

- `index.html`: This file defines the structure and content of the web page for the Black Jack game. It includes HTML elements such as headings, paragraphs, buttons, and a script tag to link the JavaScript code.

- `shah.css`: This file contains the CSS styles used to customize the appearance of the Black Jack game. It defines styles for the headings, body, paragraphs, buttons, and background image.

- `index.js`: This file contains the JavaScript code that implements the game logic. It includes functions for starting the game, drawing new cards, generating random cards, and updating the game state. The code also keeps track of the player's chips, determines if they have a blackjack or have lost the game, and updates the display accordingly.

- `desktop-wallpaper-cell-solitaire.jpg`: This image file is used as the background image for the game.

- `README.md`: This readme file provides an overview of the repository and its contents.

## How to Play

To play the Black Jack game, open the `index.html` file in a web browser. The game interface will be displayed with a title, introductory message, buttons for starting the game and drawing new cards, and sections to display the cards, sum, and player's chips.

- Click the "Start Game" button to begin a new game round. This will generate two initial cards and display them.

- The "Cards" section will show the cards dealt to the player.

- The "Sum" section will display the total sum of the player's cards.

- Based on the sum of the cards, the game will display a message indicating the player's status. If the sum is less than or equal to 20, the player will be prompted to draw a new card. If the sum is 21, the player will win with a blackjack. If the sum exceeds 21, the player will lose and be out of the game.

- The player's chips will be updated based on the outcome of the game. If the player wins or draws a new card, 15 chips will be added. If the player gets a blackjack, 15 chips will be added as well. If the player loses, 20 chips will be deducted.

- The player's name and current chip count will be displayed in the footer section of the game.

- Click the "New card" button to draw a new card and continue playing if the player is still alive and does not have a blackjack.

Enjoy playing the Black Jack game!
