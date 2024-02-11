enum color {
  red,
  green,
  blue
}

let Color: color = color.red;
console.log(Color);

var Green : color = color.green;
console.log(Green);

function throwError(message: string): never {
    throw new Error(message);
}

