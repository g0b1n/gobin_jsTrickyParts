function curriedAdd() {
    let numbers = [];

    function innerAdd(num) {
        if (num !== undefined) {
            numbers.push(num);
            return innerAdd; // Return itself to allow chaining
        } else {
            return numbers.reduce((acc, curr) => acc + curr, 0);
        }
    }

    return innerAdd;
}

let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

console.log(firstAdder()); // 0
console.log(secondAdder(1)(2)()); // 3
console.log(thirdAdder(2)(8)(5)(1)()); // 16

module.exports = { curriedAdd };
