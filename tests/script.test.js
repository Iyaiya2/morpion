const Morpion = require("../morpion");

describe("showBoard", () => {
  test("displays game board correctly", () => {
    const m = new Morpion();
    m.cells = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

    console.log = jest.fn();

    m.showBoard();

    expect(console.log).toHaveBeenCalledWith(" X | O | X ");
    expect(console.log).toHaveBeenCalledWith("---|---|---");
    expect(console.log).toHaveBeenCalledWith(" O | X | O ");
    expect(console.log).toHaveBeenCalledWith("---|---|---");
    expect(console.log).toHaveBeenCalledWith(" X | O | X ");
  });
});

describe("entering horizontal winning combinations creates a victory", () => {
  test("when first line wins", () => {
    const m = new Morpion();
    m.cells = ["X", "X", "X", "O", "X", "O", "X", "O", "X"];
    console.log = jest.fn();
    m.checkVictory("X");
    expect(console.log).toHaveBeenCalledWith("Joueur X gagne !");
  });

  test("when second line wins", () => {
    const m = new Morpion();
    m.cells = ["O", "X", "O", "X", "X", "X", "X", "O", "X"];
    console.log = jest.fn();
    m.checkVictory("X");
    expect(console.log).toHaveBeenCalledWith("Joueur X gagne !");
  });

  test("when third line wins", () => {
    const m = new Morpion();
    m.cells = ["O", "X", "O", "X", "O", "X", "X", "X", "X"];
    console.log = jest.fn();
    m.checkVictory("X");
    expect(console.log).toHaveBeenCalledWith("Joueur X gagne !");
  });
});

describe("entering vertical winning combinations creates a victory", () => {
  test("when first column wins", () => {
    const m = new Morpion();
    m.cells = ["X", "O", "X", "X", "X", "O", "X", "O", "X"];
    console.log = jest.fn();
    m.checkVictory("X");
    expect(console.log).toHaveBeenCalledWith("Joueur X gagne !");
  });

  test("when second column wins", () => {
    const m = new Morpion();
    m.cells = ["O", "X", "X", "X", "X", "O", "O", "X", "X"];
    console.log = jest.fn();
    m.checkVictory("X");
    expect(console.log).toHaveBeenCalledWith("Joueur X gagne !");
  });

  test("when third column wins", () => {
    const m = new Morpion();
    m.cells = ["O", "X", "X", "X", "O", "X", "O", "X", "X"];
    console.log = jest.fn();
    m.checkVictory("X");
    expect(console.log).toHaveBeenCalledWith("Joueur X gagne !");
  });
});

describe("entering diagonal winning combinations creates a victory", () => {
  test("when left-to-right diagonal wins", () => {
    const m = new Morpion();
    m.cells = ["X", "O", "O", "O", "X", "O", "X", "X", "X"];
    console.log = jest.fn();
    m.checkVictory("X");
    expect(console.log).toHaveBeenCalledWith("Joueur X gagne !");
    
  });

  test("when right-to-left diagonal wins", () => {
    const m = new Morpion();
    m.cells = ["O", "O", "X", "O", "X", "O", "X", "X", "O"];
    console.log = jest.fn();
    m.checkVictory("O");
    expect(console.log).toHaveBeenCalledWith("Joueur O gagne !");
  });
});