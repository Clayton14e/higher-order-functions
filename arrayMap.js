const Animals = [   
    {name: "Fluffykins" , species: "rabbit" },
    {name: "Caro" , species: "dog" },
    {name: "Hamilton" , species: "dog"},
    {name: "Harold", species: "fish"},
    {name: "Ursula" , species: "cat"},
    {name: "Jimmy", species: "fish"}
]

getNames = (animals) =>{
    let names = [];
    for(let animal of animals){
        names.push(animal.name);
    }
    return names;
}

console.log(getNames(Animals));

mapNames = (animals) =>{
    let names = animals.map(animal => animal.name);
    return names;
}
console.log(mapNames(Animals));