kaplay();

scene("accueil", () => {
    // Load le sprite
    loadSprite("background", "sprites/Skies/10.jpeg");
    // Ajouter le sprite loadé
    add([
    sprite("background"),
    pos(0, 0), // Position en haut à gauche
    scale(width() / 900, height() / 700), // Adapter à la taille de l'écran
    fixed(), // Garde l'image en place même si la caméra bouge
  ]);
    // Ajouter le titre
    add([
    text("Amene le dinosaure au bus"),
    pos(width() / 2, height() / 3 - 50), // Centre horizontalement et ajuste verticalement
    anchor("center"),
  ]);
  /*add([
    sprite("joueur"),
    pos(100, 100),
  ]);*/
});

go("accueil");