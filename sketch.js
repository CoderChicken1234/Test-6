var bg, bgImg, marsBgImg
var spaceShipImg, spaceShip
var venus;
var mars, marsImg;
var acid_planet;
var Kepler232b;
var gameState = 0;
var marsObject, venusObject, keplerObject, acidObject;
var marsTablet, marsTabletImg, marsSpaceTentTab, marsSpaceTentTabImg;
var marsSpaceTent;
var O2, O2img
var o2
var O2Bar = 200
var N2, N2img,  n2;
var man, manImg, man2
var exitButtonMars;
var N2bar = 200
var venusBgImg
var volcanos, volcanaosImg;
var volcanos_array = []




function preload(){
bgImg = loadImage("./assets/Space BG.png")
spaceShipImg = loadImage("./assets/SpaceShip.png")
marsImg = loadImage("./assets/Mars.png")
marsBgImg = loadImage("./assets/MarsBg.png")
marsTabletImg = loadImage("./assets/Mars_tablet.png")
marsSpaceTentTabImg = loadImage("./assets/mars_spaceTent.png")
O2img = loadImage("./assets/O2.png")
N2img = loadImage("./assets/N2.png")
venusBgImg = loadImage("./assets/VenusBg.png")
volcanaosImg = loadImage("./assets/Volcanas.png")

}

function setup(){
createCanvas(1500,700);
background(bgImg)

if(gameState == 0){
  
spaceShip = createSprite(750,350,200,200)
spaceShip.addImage("spaceShip",spaceShipImg)
spaceShip.scale = 0.3

venus = createImg('./assets/Venus.png',"venus")
venus.position(-150,0)
venus.size(650,250)
venus.mouseClicked(venusFunc)

mars = createImg('./assets/Mars.png',"mars")
mars.position(1150,0)
mars.size(250,250)
mars.mouseClicked(marsFunc)

acid_planet = createImg('./assets/Acid_planet.png',"Acid")
acid_planet.position(1150,380)
acid_planet.size(350,350)
acid_planet.mouseClicked(acidPlanetFunc)

Kepler232b = createImg('./assets/HabitPlanet.png',"Acid")
Kepler232b.position(50, 400)
Kepler232b.size(300,300)
Kepler232b.mouseClicked(Kepler232bFunc)
}

  





  exitButtonMars = createImg('./assets/Exit Button.png' )
  exitButtonMars.position(10,10)
   exitButtonMars.size(50,50)
  exitButtonMars.mouseClicked(exitGame)




}

function draw() {







  
 drawSprites(); 
 

}

function venusFunc(){
  gameState = 2
  venus.hide()
  acid_planet.hide()
  Kepler232b.hide()
  mars.hide()
  spaceShip.remove()


  if(gameState == 2){
    venusObject = new venus_planet()  
    venusObject.play()
}
}

function marsFunc(){
  gameState = 1
  venus.hide()
  acid_planet.hide()
  Kepler232b.hide()
  mars.hide()
  spaceShip.remove()


  if(gameState == 1){
      marsObject = new Mars()
      marsObject.play()
  }
}

function acidPlanetFunc(){
  gameState = 4


if(gameState == 4){
    acidObject = new acidPlanet()
    acidObject.play()
}
}

function Kepler232bFunc(){
  gameState = 3

  
if(gameState == 3){
    keplerObject = new kepler()
    keplerObject.play()
}
}

function exitGame(){
  gameState = 0
}



