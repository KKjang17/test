
const people = [
    {
    name: "John",
    score: "444",
    isPremium: false
    },
    {
    name: "Mary",
    score: "69",
    isPremium: true
    }
];
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  

const newMats = materials.map(mat => mat + ` ${mat.length}`);

console.log(newMats)

