const fs = require("fs");
const input = fs.readFileSync(0).toString()

const tile = input.split("\n").map(l => l.split(""))
const height = tile.length
const width = tile[0].length // yolo
function count(right, down) {
  function getPos(iterations) {
    return { x: right * iterations % width, y: down * iterations % height }
  }

  let treeEncounters = 0
  for (let i = 0; i < height / down; i++) {
    const pos = getPos(i)
    console.log(tile[pos.y][pos.x])
    const isTree = tile[pos.y][pos.x] === '#'
    if (isTree) {
      treeEncounters += 1
    }
  }
  return treeEncounters
}


const ans = [
  count(1, 1),
  count(3, 1),
  count(5, 1),
  count(7, 1),
  count(1, 2),
]
console.log(ans)
console.log(ans.reduce((p, c) => p * c, 1))

