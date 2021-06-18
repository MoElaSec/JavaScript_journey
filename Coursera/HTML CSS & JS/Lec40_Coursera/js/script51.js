//Closures
function makeMultiplier(multiplier) {
    return (
        function (x) {
            return multiplier * x;
        }

    );
}

var doubleMe = makeMultiplier(2);
console.log(doubleMe(10));
