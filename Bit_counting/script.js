"use strict";

//pass a base to the string (2) so it returns the binary representation
//pass the regex as 1 and set it to global -> if it find ones, it's goig to be an array with as many 1ns as it finds and if not, it's going to be null
//if the oneMatches is positive, then return the length of the array because this will give us the 1ns in the binary represenation and if there aren't any 1n, onematches is null
var countBits = function (n) {
  if (n) {
    return n.toString(2).match(/1/g).length;
  }
  return 0;

  //or:
  // return n.toString(2).split("0").join("").length;
};

console.log(countBits(9805906576));
