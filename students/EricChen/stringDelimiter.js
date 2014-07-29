function stringDelimiter(strIn, charIn) {
  var resultArray = [];
  var strTemp = "";

  for(var i = 0; i < strIn.length; i++ ){
    if(strIn[i] == charIn) {
      if(strTemp == "") {
       continue; 
      } else {
        resultArray.push(strTemp);
        strTemp = "";   
      }
    } else if(i == (strIn.length-1)) {
        strTemp += strIn[i];
        resultArray.push(strTemp);
    } else {
        strTemp += strIn[i];
    }
  }
  return resultArray;
}