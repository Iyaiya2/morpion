# Morpion

## Repo

Ceci est un exercice pour montrer comment mettre en place un jeu du morpion en TDD en HTML CSS JS.

## Exemples

- Adam Nagy
  - [Dev.to simple html css js tic tac toe game](https://dev.to/javascriptacademy/create-a-simple-tic-tac-toe-game-using-html-css-javascript-i4k)
  - [Repo](https://github.com/javascriptacademy-stash/tic-tac-toe)

## Hors sujet

- [Comment faire des alias sur git bash de windows](https://stackoverflow.com/questions/37104273/how-to-set-aliases-in-git-bash-for-windows)
- Pour être plus balèze en terminal : apprendre git bash (pour les alias)
- comment taper plus vite : les sites de jeux comme keybr sont super.

## Consignes pour finir le projet :

- classe Morpion JS :
  - finir checkVictory
  - implémenter la boucle dans gameLoop : elle se termine que quand `finished` donc quand toutes les cases sont remplies ou quand quelqueu'un gagne
- html : lier chaque case / bouton / div... aux cases de js.
- css : un peu de styling pour se la péter auprès des recruteurs.

## Étapes (corrigé)

### 0. Réfléchir

- que mettre dans l'index ?
- que faire en style ?
- quelle logique JS adopter pour tout le jeu ?

### 1. Faire l'index.html

Initialiser le projet : `git init`.  
Comme dans l'exemple donné.

### 2. Faire le styles.css

Comme dans l'exemple donné.

### 3. Mettre en place les tests unitaires

Préparer l'arrivée de packages NPM :

```sh
npm init
```

> Vous voyez les différences ?

Installer jest grâce à NPM

```sh
npm install --save-dev jest
```

> Vous voyez les différences ? -> il y a un dossier node_modules avec BEAUCOUP de choses dedans. Il faut l'ignorer grâce àà un nouveau fichier `.gitignore` (écrire node_modules)

Configurer Jest

```json
// package.json
"scripts": {
  "test": "jest"
}
```

Créer un dossier `tests`  
Y créer un fichier `morpion.test.js` qu'on peut aussi appeler `morpion.spec.js`.

Le remplir avec :

```js
const Morpion = require("./script"); // attention a mettre un chemin correct !

test("Initialisation du jeu", () => {
  const jeu = new Morpion();
  expect(jeu).toBeDefined();
  expect(jeu.getCurrentPlayer()).toBe("X"); // On peut ajuster ça selon comment on initialise le jeu
  // Ajouter d'autres tests pour l'initialisation du plateau, etc.
});

// Ajoute d'autres tests pour les différentes fonctionnalités du morpion
```

### 4. Faire le script.js

#### 4.1 Initialiser `script.js`

```js
class Morpion {
  // La logique du morpion ira ici
}

module.exports = Morpion;
```

#### 4.2. Les tests

Exemples de tests unitaires

```js
const Morpion = require("../script");

test("Initialisation du jeu", () => {
  const jeu = new Morpion();
  expect(jeu.plateau).toEqual([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  expect(jeu.joueurActuel).toBe("X");
  expect(jeu.partieTerminee).toBe(false);
  expect(jeu.gagnant).toBeNull();
});

test("Jouer un coup valide", () => {
  const jeu = new Morpion();
  jeu.jouerCoup(0, 0);
  expect(jeu.plateau[0][0]).toBe("X");
  expect(jeu.joueurActuel).toBe("O"); // Le joueur suivant après le coup
});

test("Jouer un coup invalide", () => {
  const jeu = new Morpion();
  jeu.jouerCoup(0, 0);
  jeu.jouerCoup(0, 0); // Réessayer de jouer au même endroit
  expect(jeu.plateau[0][0]).toBe("X");
  expect(jeu.joueurActuel).toBe("O"); // Le joueur actuel ne change pas en cas de coup invalide
});

test("Vérification de la victoire en ligne", () => {
  const jeu = new Morpion();
  jeu.jouerCoup(0, 0);
  jeu.jouerCoup(1, 0);
  jeu.jouerCoup(0, 1);
  jeu.jouerCoup(1, 1);
  jeu.jouerCoup(0, 2);
  expect(jeu.partieTerminee).toBe(true);
  expect(jeu.gagnant).toBe("X");
});
```
