function oldestAge(peeps) {
   return _.max(peeps, 'age').age;
}

function living(peeps) {
    return _.flatten( _.filter(peeps, 'age'),'name');
}

function oldestLivingPerson(peeps){
  return _.max(peeps, 'age').name;
}
