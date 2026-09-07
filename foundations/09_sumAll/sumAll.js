const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number" ||
        a < 0 || b < 0 ||
        parseInt(a) !== a || parseInt(b) !== b) return "ERROR"
    let res = 0
    let min = (a > b) ? b : a
    let max = (a > b) ? a : b

    for (let i = min; i <= max; i += 1) {
        res += i
    }
    return res
};

// Do not edit below this line
module.exports = sumAll;
