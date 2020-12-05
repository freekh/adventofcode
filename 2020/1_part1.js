const fs = require("fs");
const input = fs.readFileSync(0).toString()

function onlyInts(elems) {
  return elems.reduce((prev, e) => {
    try {
      return prev.concat(parseInt(e))
    } catch {
      return prev
    }
  }, [])
}
const elems = onlyInts(input.split("\n"))

const res = elems.reduce((prev, n1) => {
  if (prev) {
    return prev
  }
  try {
    const n2 = elems.find(n2 => n2 + n1 === 2020)
    if (n2) {
      return n1 * n2 
    }
  } catch (err) {
    return null
  }
}, null)

console.log(res)