import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbole="X" />
          <Player initialName="player 2" symbole="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
