/* Write a function that takes in a string seperated by a seperator, and will return an array 
of strings in between the seperators.

var sampleInput = 'asdf$lskd1234$asdo$$$';

stringDelimiter(sampleInput, '$');
 -> ['asdf', 'lskd1234', 'asdo'] */

var inputSample = 'asdf$lskd1234$asdo$$$';

function delimiter(str, char) {
    var arr =[];
    var start=0;
    var el;
    for(var i=0;i < str.length; i++) {
        if(str.charAt(i) === '$'){
            el = str.substring(start,i);
            if(el !== '') {
                arr.push( el );
            }
            start = i+1;
        }
    }
    return arr;
}

delimiter(inputSample, '$');
