// JS Object Oriented inheritance practice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

// Car ctor
var Car = function (wheels) {
    this.wheels = wheels;
};

// Add some methods via the prototype
Car.prototype.drive = function () {
    console.log("drive drive");
};
Car.prototype.ebrake = function () {
    console.log("STOPPING!");
};
Car.prototype.windshieldWipers = function () {
    console.log("swish swash, swish swash");
};


// HotRod inherits from Car
// HotRod ctor
var HotRod = function (wheels, engine, paintJob) {
    // Call the parent ctor using call and set "this"
    Car.call(this, wheels);

    // Now do the HotRod stuff
    this.engine = engine;
    this.paintJob = paintJob;
};

// Create a HotRod prototype
// it inherits from the superclass prototype
HotRod.prototype = Object.create(Car.prototype);
HotRod.prototype.constructor = HotRod;

// Add a new method
HotRod.prototype.burnout = function () {
    alert("Burning rubber!");
};

// Replace the drive method
HotRod.prototype.drive = function () {
    console.log("Zoom Zoom!");
};

var rabbit = new Car(4);
rabbit.drive();  // drive drive
rabbit.ebrake();  // STOPPING!
rabbit.windshieldWipers();  // swish swash, swish swash 

var tesla = new HotRod(4, "electric", "blackLightning");
tesla.drive();  // Zoom Zoom!
tesla.ebrake();  // STOPPING!
tesla.burnout();  // Alert! Burning rubber!
tesla.windshieldWipers();  // swish swash, swish swash   // from superclass

console.log(rabbit instanceof Car);  // true
console.log(tesla instanceof Car);  // true