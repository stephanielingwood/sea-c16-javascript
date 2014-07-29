/**
Person Model
A classification of an object that describes a person in Javascript. 
It's constructor should take a name, parent name, and optional age. The object 
should have a #isDead method that returns a boolean based on if the age is 
set or not.
**/

// ver2 uses prototype

var Person = function (name, parentName, age) {
    this.name = name;
    this.parentName = parentName;
    this.age = age;
};

Person.prototype.isDead = function () {
    // no one lives forever, 114 is max age allowed
    if (this.age >= 115 || this.age <= 0) {
        return true;
    } else {
        return false;
    }
};