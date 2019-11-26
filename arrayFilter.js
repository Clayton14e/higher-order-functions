const Animals = [   
    {name: "Fluffykins" , species: "rabbit" },
    {name: "Caro" , species: "dog" },
    {name: "Hamilton" , species: "dog"},
    {name: "Harold", species: "fish"},
    {name: "Ursula" , species: "cat"},
    {name: "Jimmy", species: "fish"}
]

filterDogs = (arr) => {
    let dogArr = [];
    for(let animal of arr){
        if(animal.species === 'dog'){
            dogArr.push(animal);
        }    
    }
    console.log(dogArr);
};

filterDogs(Animals);

filterDogsAgain = (arr) => {
    let dogArr = arr.filter(item => item.species === 'dog');
    console.log(dogArr);
};

filterDogsAgain(Animals);