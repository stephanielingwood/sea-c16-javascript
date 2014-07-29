var people = [
    { name: 'Hank', age: 29, parent: 'Don' }, 
    { name: 'Deborah', age: 30, parent: 'Don'}, 
    { name: 'Danny', age: 24, parent: 'Don' },
    { name: 'Don', age: 64, parent: 'Haskell' }, 
    { name: 'Kathy', age: 75, parent: 'Lenora' },
    { name: 'Haskell', parent: 'Finus'}, 
    { name: 'Finus' }
];



// (1) 
// a function that returns the oldest age.
oldestAge = function(peopleArray){ 
    var object = _.max(peopleArray, 'age'); 
    return object.age; 
};

console.log(oldestAge(people));
// -> 75



// (2) 
// a function that returns an array of the names of all living people.
// where having an age == "a live person"
living = function(peopleArray){
    // filter the array for just people with an age
    var livePeople = _.filter(peopleArray, 'age');   
    // now return the names
    return _.pluck(livePeople, 'name');
};

console.log(living(people));
// -> ['Hank', 'Danny', 'Deborah', 'Kathy', 'Don']



// (3)
// a function that will return the name of the oldest living person.
oldestLivingPerson = function(peopleArray){
    // get the oldest age
    var topAge = oldestAge(people);
    
    // return the array of people with that age
    var arrayPeeps = _.filter(peopleArray, {'age': topAge});

    return arrayPeeps[0].name;
};

console.log(oldestLivingPerson(people));
// -> 'Kathy'
