function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
}

var myCircle = new Circle(10);
// console.log(myCircle.getArea());
console.log(myCircle);