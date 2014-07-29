// Implement a decorator function that takes 
// a function as an argument and will track
// how many times the passed function was called.


// a simple function that adds two numbers
// this function will be wrapped by the counterDecorator function
function Add(x, y) {
    return x + y;
}

function counterDecorator(innerFunction) {
    var callCount = 0;

    function countAndExecute() {
        callCount++;
        // do the innerFunction work
        return innerFunction.apply(null, arguments);
    }

    countAndExecute.getCallCount = function () {
        return "Inner function callCount: " + callCount;
    };
	
	// return wrapped function
	return countAndExecute;  
}



//var AddWrapped = counterDecorator(Add);

//AddWrapped(100,11);
// -> 111
//AddWrapped.getCallCount();
// -> 1

//AddWrapped(22,200);
// -> 222
//AddWrapped.getCallCount();
// -> 2