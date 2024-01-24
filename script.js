const prompt = require("prompt-sync")();

class Morpion {
  constructor() {
    this.player1 = "X";
    this.player2 = "O";
    this.cells = ["", "", "", "", "", "", "", "", ""];
  }

  showBoard() {
    console.log(
      " " +
        this.cells[0] +
        " | " +
        this.cells[1] +
        " | " +
        this.cells[2] +
        " "
    );
    console.log("---|---|---");
    console.log(
      " " +
        this.cells[3] +
        " | " +
        this.cells[4] +
        " | " +
        this.cells[5] +
        " "
    );
    console.log("---|---|---");
    console.log(
      " " +
        this.cells[6] +
        " | " +
        this.cells[7] +
        " | " +
        this.cells[8] +
        " "
    );
  }

  play(player) {
    console.log("Joueur " + player + " joue.");
    this.showBoard();

    const choice = prompt("Choisis une case (entre 1 et 9)");
    const btwZeroAndNine = Number(choice) > 0 && Number(choice) < 10;
    const cellIsEmpty = this.cells[Number(choice) - 1] === "";

    if (btwZeroAndNine && cellIsEmpty) {
      this.cells[Number(choice) - 1] = player;
    } else {
      console.log("Nan, rejoue.")
      this.play(player);
    }

    this.showBoard();
  }

  checkVictory() {}

  gameLoop() {
    this.play(this.player1);
    this.checkVictory();
    this.play(this.player2);
    this.checkVictory();
  }
}

const m = new Morpion();
m.gameLoop();
