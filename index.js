class Polygon {
    constructor(array) {
        this.sides = array
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        let perimeter = 0
        for (const item of this.sides) {
            perimeter += item
        }
        return perimeter
    }
}

class Triangle extends Polygon {
    constructor(array) {
        super(array);
    }
    get isValid () {
       if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[2] + this.sides[0] > this.sides[1]) {
           return true
       } else {
           return false
       }
    }
}

class Square extends Polygon {
    constructor(array) {
        super(array);
    }

    get isValid () {
       if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]) {
           return true
       } else {
           return false
       }
    }

    get area () {
        return this.sides[0] ** 2
    }
}