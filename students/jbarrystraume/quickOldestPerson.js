var people = [
  {name: 'Hank', age: 29, parent: 'Don'}, 
  {name: 'Deborah', age: 30, parent: 'Don'},
  {name: 'Danny', age: 24, parent: 'Don'},
  {name: 'Don', age: 64, parent: 'Haskell'},
  {name: 'Kathy', age: 75, parent: 'Lenora'},
  {name: 'Haskell', parent: 'Finus'},
  {name: 'Finus'}];

var max = -1;
var maxName;
var alive = [];

for (i = 0; i < people.length; i++) {
  if (people[i].age) {
    alive.push(people[i].name);
    if (people[i].age > max) {
      maxName = people[i].name;
    }
    max = Math.max(max, people[i].age);
  }
}
console.log(max);
console.log(maxName);
console.log(alive);