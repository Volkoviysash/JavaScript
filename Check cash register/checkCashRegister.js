function checkCashRegister(price, cash, cid) {
    let moneyTypes = {
        "ONE HUNDRED": 100,
        "TWENTY" : 20,
        "TEN" : 10,
        "FIVE" : 5,
        "ONE" : 1,
        "QUARTER" : 0.25,
        "DIME" : 0.1,
        "NICKEL" : 0.05,
        "PENNY" : 0.01,
    };
    
   let changeNumber = cash - price;
   let changeUnits = [];
   let totalInCid = 0;

   for (let element of cid) {
    totalInCid += element[1];
   }

   if (changeNumber > totalInCid){
        return { status: "INSUFFICIENT_FUNDS", change: changeUnits };
   } else if (changeNumber === totalInCid) {
        return { status: "CLOSED", change: cid };
   } else {
       cid = cid.reverse();
       for (let array of cid) {
            let tempRest = [array[0], 0];
            while (changeNumber >= moneyTypes[array[0]] && array[1] > 0) {
                changeNumber = (changeNumber - moneyTypes[array[0]]).toFixed(2);
                tempRest[1] += moneyTypes[array[0]];
                array[1] -= moneyTypes[array[0]];
                }
            if (tempRest[1] > 0) {
                changeUnits.push(tempRest);
            }
        }  
        if (changeNumber > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
          }
        return {status : "OPEN", change : changeUnits};
    }
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
