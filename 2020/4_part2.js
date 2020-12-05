const fs = require("fs");
const input = fs.readFileSync(0).toString();

const fields = ["hgt", "byr", "pid", "ecl", "eyr", "iyr", "hcl"];

const parsed = input.split("\n\n").map((ls) => {
  return ls
    .replace(/\n/g, " ")
    .split(" ")
    .reduce((p, l) => {
      const [k, v, _] = l.split(":");
      if (fields.indexOf(k) !== -1) {
        let pv = v
        try {
          pv = parseInt(v)
        } catch (err) {
          //
        }
        switch(k) {
          case "byr":
            pv > 
          case   
        }
        return { [k]: v, ...p };
      }
      return p;
    }, {});
});

const ans = parsed;
console.log(ans.filter(c => Object.keys(c).length === 7).length);
