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
        obj["H"] = Math.floor(currency / 50);
        obj["Q"] = Math.floor((currency % 50) / 25);
        obj["D"] = Math.floor(((currency % 50) % 25) / 10);
        obj["N"] = Math.floor((((currency % 50) % 25) % 10) / 5);
        obj["P"] = Math.floor(((((currency % 50) % 25) % 10) % 5) / 1);
    }

    return obj;
}