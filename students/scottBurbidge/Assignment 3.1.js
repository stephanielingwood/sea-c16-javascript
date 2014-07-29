var Person = function (name, parent, age, parentAge) {
  this.name = name;
  this.parent = parent;
  this.age = age;
  this.parentAge = parentAge;
  this.isDead = function () {
    !(!this.age || this.age > 150 || this.age >= this.parentAge) ? true: false 
  };
};



