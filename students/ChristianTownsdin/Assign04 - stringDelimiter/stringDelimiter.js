// write a function that takes a string, and breaks it down into 
// an array of strings between the seperators
// do not store any empty strings.

// var sampleInput = 'asdf$lskd1234$asdo$$$';
// stringDelimiter(sampleInput, '$');
// -> ['asdf', 'lskd1234', 'asdo']

var stringDelimiter = function (inputString, delim) {
    var resultArray = [];
    var stringChunk = "";

    for (var i = 0, len = inputString.length; i < len; i++) { // only looks up len once
        if (inputString.charAt(i) !== delim) { // it's not the delim, so...
            stringChunk += inputString.charAt(i);
        } else { // it is the delim, so...
            if (stringChunk === "") {
                continue;
            }
            resultArray.push(stringChunk);
            stringChunk = "";
        }
    }
    return resultArray;
};

// var sampleInput = 'asdf$lskd1234$asdo$$$';
// console.log(stringDelimiter(sampleInput, '$'));
// -> ["asdf", "lskd1234", "asdo"]