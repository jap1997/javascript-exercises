const removeFromArray = function(array) {
    let res = [...array]
    const values = Object.values(arguments).slice(1)
    values.forEach(v => {
        res = res.filter(el => el !== v)
    })
    return res
};

// Do not edit below this line
module.exports = removeFromArray;
