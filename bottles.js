/*
  This program will take one CLA, a number,
  representing the cash investment in the
  Lighthouse Markets Bottle Recycling Program,
  and output the total number of bottles they
  can receive after exchanges.
*/

var cashIn = process.argv[2];
var totalIn = {cash: cashIn, bottles: 0, caps: 0};

/*
  Function name: getBottles
  Input: one array of three numbers
  return: number
  `getBottles` will take an array input that lists cash,
  empty bottles, and bottle caps to be exchanged for
  full bottles, and returns the total number of full
  bottles that can be redeemed after full recursive use
  of the recycling program
*/
var getBottles = function(credit) {
  var bottles = 0

  if (credit.cash >= 2) {
    bottles += parseInt(credit.cash / 2);
    var cashRemain = credit.cash % 2;
  }
  if (credit.bottles >= 2) {
    bottles += parseInt(credit.bottles / 2);
    bottlesRemain = credit.bottles % 2;
  }
  if (credit.caps >= 4) {
    bottles += parseInt(credit.caps / 4);
    capsRemain = credit.caps % 4;
  }

  return bottles;
};

console.log(getBottles(totalIn))