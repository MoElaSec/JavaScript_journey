var literalCircle = {
    radius: 10,

    getArea: function() {
        var self = this; //now this doesn't refer to global window
        console.log(this);

        var increaseRadius = function () { //inner function
            // this.radius = 20;
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);

        return Math.PI * Math.pow(this.radius, 2);
    }
};

// console.log(literalCircle);
console.log(literalCircle.getArea());