/*

This is a challenge that I needed to create an array and build an algorithm that would give a 10% discount when the price was higher than 30 and add the other values ​​to a single value.

*/

const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValue = 0

function discountAdded(price, discount) {
    const result = (price * discount) / 100
    return result
}

cart.forEach(value => {

    if (value > 30) {
        const discount = discountAdded(value, 10)
        finalValue = finalValue + (value - discount)
    } else {
        finalValue += value
    }
});

console.log(finalValue)
