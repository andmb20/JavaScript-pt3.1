const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValue = 0

function discountAdded(price, discount) {
    const result = (price * discount) / 100
   // return result
    console.log(result)

}

discountAdded(250, 7)


cart.forEach(value => {
    finalValue = finalValue + value
});
