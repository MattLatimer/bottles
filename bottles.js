/*
  This program will take one CLA, a number,
  representing the cash investment in the
  Lighthouse Markets Bottle Recycling Program,
  and output the total number of bottles they
  can receive after exchanges.
*/

var cashIn = process.argv[2];
var totalIn = {cash: cashIn, empties: 0, caps: 0};
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
  var bottles = 0;
  var empties = credit.empties;
  var caps = credit.caps;

  if (credit.cash >= 2) {
    bottles += parseInt(credit.cash / 2);
  }
  if (credit.empties >= 2) {
    bottles += parseInt(credit.empties / 2);
    empties = credit.empties % 2;
  }
  if (credit.caps >= 4) {
    bottles += parseInt(credit.caps / 4);
    caps = credit.caps % 4;
  }

  empties += bottles;
  caps += bottles;

  if (empties >= 2 || caps >= 4) {
    bottles += getBottles({cash: 0, empties: empties, caps: caps});
  }

  return bottles;
};

console.log(getBottles(totalIn));