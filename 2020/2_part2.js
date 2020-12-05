const fs = require("fs");
const input = fs.readFileSync(0).toString()

function parse(input) {
  return input.split("\n").filter(l => !!l).map(line => {
    const [_, min, max, letter, pwd] = line.match(/(\d+)-(\d+) (.+): (.+)/)
    return { min: parseInt(min), max: parseInt(max), letter, pwd }
  })
}

const elems = parse(input)
const res = elems.reduce((sum, { min, max, letter, pwd }) => {
  const positionContains = [pwd[min - 1] === letter, pwd[max - 1] === letter].filter(t => t).length
  if (positionContains === 1) {
    return sum + 1
  }
  return sum
}, 0)

console.log(res)