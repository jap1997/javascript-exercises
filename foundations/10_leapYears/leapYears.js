const leapYears = function(year) {
    let res = false
    if (year % 4 == 0) res = true
    if (year % 100 == 0 && year % 400 !== 0) res = false
    return res
};

// Do not edit below this line
module.exports = leapYears;
