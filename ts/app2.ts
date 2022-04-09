interface Point {
  x: number;
  y: number;
}

const point = { x: 12, y: 26 };

const points: Node = document.createElement('pre');

points.textContent = JSON.stringify(point, null, 3);

document.body.appendChild(points);

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

const parsed = map(['1', '2', '3'], n => parseInt(n));

console.log(parsed);
