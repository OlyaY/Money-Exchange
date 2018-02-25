// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var currency;
    var obj = {};

    if (currency >= 10000) {
        delete obj;
        obj["error"] = "You are rich, my friend! We don't have so much coins for exchange";
    } else if (currency === 0 || currency < 0) {
        delete obj;
    } else {
        if (currency >= 50) {
            obj.H = Math.floor(currency / 50);
            currency = currency - (obj.H * 50);
        }
        if (currency >= 25) {
            obj.Q = Math.floor(currency / 25);
            currency = currency - (obj.Q * 25);
        }
        if (currency >= 10) {
            obj.D = Math.floor(currency / 10);
            currency = currency - (obj.D * 10);
        }
        if (currency >= 5) {
            obj.N = Math.floor(currency / 5);
            currency = currency - (obj.N * 5);
        }
        if (currency > 0) {
            obj.P = currency;
        }
    }
    return obj;
}