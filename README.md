# React Tic-Tac-Toe

This project is a React-based implementation of the classic Tic-Tac-Toe game. It features dynamic player interactions, game state management, and customizable player names.

---

## Features

- **Dynamic Game Board**: Supports real-time updates as players make their moves.
- **Customizable Player Names**: Edit and save player names dynamically.
- **Game Over Logic**: Determines and announces the winner or a draw.
- **Logs**: Tracks and displays the history of moves.
- **Restart Functionality**: Reset the game board and start fresh.

---

## Technologies Used

- **React**: For building the UI and managing state.
- **JavaScript (ES6+)**: For game logic and interactions.
- **CSS**: For styling the application.

---

## Project Structure

```plaintext
src/
├── components/
│   ├── Player.jsx      # Player component for handling player details.
│   ├── GameBoard.jsx   # Game board layout and interactions.
│   ├── Log.jsx         # Displays the move history.
│   ├── GameOver.jsx    # Handles game-over logic and UI.
├── App.jsx             # Main application logic.
├── index.jsx           # Entry point for React.
├── winning-combinations.js # Defines winning combinations for the game.
```

---

## How to Run

1. Clone the repository:

   ```bash
   git clone <repository-url>
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

---

## Credits

This project is based on the course **Udemy - React - The Complete Guide 2024 (incl. Next.js, Redux) 2024-12**, providing hands-on experience with React fundamentals and advanced concepts.

Course Link: [Udemy - React - The Complete Guide 2024](https://www.udemy.com/course/react-the-complete-guide-incl-redux/?srsltid=AfmBOoqL0LpnDS08-ZtZGTxNy9O6VnyqgCExE9DTWyzkFkwJQ7Lfx3ZS&couponCode=LETSLEARNNOW)

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
