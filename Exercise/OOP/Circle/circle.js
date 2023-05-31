class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
        this.getRadius = function () {
            return this.radius;
        }
        this.getArea = function () {
            return (this.radius ** 2 * Math.PI).toFixed(3);
        }
    }
}
let circle = new Circle(5, "red");
circle.getRadius();
circle.getArea();
