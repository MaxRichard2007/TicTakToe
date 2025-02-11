# React Tic-Tac-Toe

This is a simple implementation of the classic Tic-Tac-Toe game using React. It features a dynamic game board, customizable player names, and a game log to track moves. The project is designed to demonstrate key React concepts like component composition, state management, and event handling.

## Features

- **Dynamic Game Board**: A 3x3 grid where players take turns marking squares.
- **Customizable Player Names**: Edit and save player names dynamically.
- **Winner Detection**: Automatically detects when a player wins or if the game ends in a draw.
- **Move Log**: Tracks and displays the sequence of player moves.
- **Game Restart**: Reset the game board and play again.

## Project Structure

```
/src
  |-- components
  |     |-- Player.jsx
  |     |-- GameBoard.jsx
  |     |-- Log.jsx
  |     |-- GameOver.jsx
  |-- winning-combinations.js
  |-- App.jsx
index.html
```

## Components

### Player
Handles the display and customization of player names.

### GameBoard
Renders the 3x3 grid and handles player interactions with the squares.

### Log
Displays a list of all moves made in the game.

### GameOver
Shows the game over state, including the winner or draw status, and provides a button to restart the game.

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- A package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:

```bash
 git clone <repository_url>
```

2. Navigate to the project directory:

```bash
 cd react-tic-tac-toe
```

3. Install dependencies:

```bash
 npm install
```

4. Start the development server:

```bash
 npm start
```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## How It Works

### Game Logic
- The `App.jsx` component manages the game state, including turns, the active player, and the game board.
- Winning combinations are defined in `winning-combinations.js`.
- The active player alternates based on the number of turns taken.
- The game detects a win when a player achieves one of the pre-defined winning combinations.

### Interactivity
- Players can edit their names using an input field in the `Player` component.
- Clicking on a square marks it with the current player's symbol (X or O).
- A game log is updated dynamically to record each move.
- The "Game Over" screen displays the winner or a draw message, with an option to restart.

## Customization

### Modify Player Symbols
You can change the symbols used for players by updating the `PLAYERS` object in `App.jsx`:

```javascript
const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};
```

### Update Winning Combinations
To adapt the game for a different grid size, update the `WINNING_COMBINATIONS` array in `winning-combinations.js`.

## Technologies Used

- **React**: For building UI components.
- **JavaScript (ES6)**: Core programming language.
- **HTML & CSS**: For layout and styling.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes:

```bash
git commit -m "Add your message here"
```

4. Push to the branch:

```bash
git push origin feature/your-feature-name
```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Enjoy playing Tic-Tac-Toe and feel free to customize it to make it your own!

