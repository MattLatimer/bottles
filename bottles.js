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
  var bottles = {};
  bottles.bought = 0;
  bottles.fromEmpties = 0;
  bottles.fromCaps = 0;

  empties = credit.empties;
  caps = credit.caps;

  if (credit.cash >= 2) {
    bottles.bought += parseInt(credit.cash / 2);
  }
  if (credit.empties >= 2) {
    bottles.fromEmpties += parseInt(credit.empties / 2);
    empties = credit.empties % 2;
  }
  if (credit.caps >= 4) {
    bottles.fromCaps += parseInt(credit.caps / 4);
    caps = credit.caps % 4;
  }

  var newBottles = bottles.bought + bottles.fromEmpties + bottles.fromCaps;

  empties += newBottles;
  caps += newBottles;

  if (empties >= 2 || caps >= 4) {
    var recycle = getBottles({cash: 0, empties: empties, caps: caps});
    for (var key in bottles) {
      bottles[key] += recycle[key];
    }
  }

  return bottles;
};

var totalOut = getBottles(totalIn);
var totalBottles = totalOut.bought + totalOut.fromEmpties + totalOut.fromCaps;

var message = 'Total Bottles: ' + totalBottles + '\nRemaining Bottles: ' + (totalBottles % 2) +
              '\nRemaining Caps: ' + (totalBottles % 4) + '\nTotal Earned:\n  Bottles: ' +
              totalOut.fromEmpties + '\n  Caps: ' + totalOut.fromCaps;

console.log(message);