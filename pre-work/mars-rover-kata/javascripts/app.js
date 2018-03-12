// Rover Object Goes Here
// ======================

// Rover currently facing. Nort (by default) = 0, East = 1, South = 2, West = 3
var lastCardinalPoint = "Sin definir";
var nameCardinalPoint = ["N", "E", "S", "W"];
var x = 0; // posicion X del rover
var y = 0; // posicion Y del rover



function goForward(rover) {
  console.log("goForward was called!");
}

function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){

  switch (rover) {
    case "N":
      console.log("Rover Direction: N");
      console.log("Position Y: " + (y-1));
      return y = y - 1;
      break;
    case "E":
      console.log("Rover Direction: E");
      console.log("Position X: " + (x+1));
      return x = x + 1;
      break;
    case "S":
      console.log("Rover Direction: S");
      console.log("Position Y: " + (y+1));
      return y = y + 1;
      break;
    case "W":
      console.log("Rover Direction: W");
      console.log("Position X: " + (x-1));
      return x = x - 1;
      break;
    default:
      console.log("Esperando posicion");
      break;
  }

}

function rover(direction, travelLog) {
  // The direction property can contain one of four values: "N", "S", "E", or "W". Direction’s default will be "N" (North)
  // si no hemos introducido ningun paramtro, guarda "North" en la variable
  // sino valida comprueba si los datos de los parametros son correcto
  if (direction === undefined) {
    return lastCardinalPoint = "N";
  } else {
    return validCardinalPoint(direction);
  }

}

function validCardinalPoint(direction) {
  // valida si el parametro inputCardinalPoint es correcto
  for(var i = 0; i < 4; i++) {
    if(nameCardinalPoint[i] === direction) {
      console.log("rover direction: " + direction);
      return lastCardinalPoint = direction;
    }
  }
  // sino es correcto, pide al usuario que introduzca el nombre correctamente
  return console.log("Introduce un nombre correcto: N, E, S, W");
}

function listCommands(commands) {
  // lista de comandos definida por el usuario
  var arrCommands = [];
  var length = commands.length;

  for (var i = 0; i < length; i++) {
    arrCommands[i] = commands[i];

    switch (arrCommands[i]) {
      case "f":
        goForward();
        break;
      case "r":
        turnRight();
        break;
      case "l":
        turnLeft();
        break;
      default:
        console.log("No ejecutado. Introduce cualquiera de estos valores: f, r, i.");
        break;
    }
 
  }
}

function travelLog() {
  // al llegar a este este me ha dejado un poco perdido, porque no me queda claro en el enunciado del ejercio cual va a ser la funcion principal donde vamos a introducir esta propiedad 
}