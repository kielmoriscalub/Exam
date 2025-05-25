let names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let ages = [24, 65, 21, 5, 9];

let restructured = [];
for (let i = 0; i < names.length; i++) {
  restructured.push([names[i], ages[i]]);
}

console.log("Restructured array:", restructured);