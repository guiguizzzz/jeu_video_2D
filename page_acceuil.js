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
    
    loadSprite("title", "sprites/title.png") 
      
    add([
      sprite("title"),
      pos(500, 55),
      scale(10, 10)
     // Contour noir de 4px
    ])
  
  addButton("Start", vec2(width() / 2, height() / 3 + 80), () => window.location = "niveau.js");
  addButton("Quit", vec2(width() / 2, height() / 3 + 195), () => window.close());
});

function addButton(
  txt = "",
  p = vec2(0, 0),
  f = () => debug.log(""),
) {
  // add a parent background object
  const btn = add([
      rect(240, 80, { radius: 8 }),
      pos(p),
      area(),
      scale(1),
      anchor("center"),
      outline(4),
      color(255, 255, 255),
  ]);

  // add a child object that displays the text
  btn.add([
      text(txt),
      anchor("center"),
      color(0, 0, 0),
  ]);

  // onHoverUpdate() comes from area() component
  // it runs every frame when the object is being hovered
  btn.onHoverUpdate(() => {
      const t = time() * 2;
      btn.scale = vec2(1.1);
      setCursor("pointer");
  });

  // onHoverEnd() comes from area() component
  // it runs once when the object stopped being hovered
  btn.onHoverEnd(() => {
      btn.scale = vec2(1);
      btn.color = rgb();
  });

  // onClick() comes from area() component
  // it runs once when the object is clicked
  btn.onClick(f);

  return btn;
}


go("accueil");