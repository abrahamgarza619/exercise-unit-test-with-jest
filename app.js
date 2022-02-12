const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

//dollar to yen 

let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar }

const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar * 127.9)

    return valueInYen;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen }

//yen to pound 

const fromYenToPound = function(valueInYen){
    let ValueInPound = (valueInYen * 0.8)

    return ValueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }


