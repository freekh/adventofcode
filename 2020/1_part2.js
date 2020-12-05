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
  if (prev) return prev
  return elems.reduce((prev, n2) => {
    if (prev) return prev
    const n3 = elems.find(n3 => n1 + n2 + n3 === 2020)
    if (n3) {
      return n1 * n2 * n3
    }
    return null
  }, null)
}, null)

console.log(res)