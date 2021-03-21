"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}
// typeof
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
function padLeft(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5
        ? new SpaceRepeatingPadder(4)
        : new StringPadder("  ");
}
var padder = getRandomPadder();
//       ^ = let padder: Padder
if (padder instanceof SpaceRepeatingPadder) {
    padder;
    //     ^ = let padder: SpaceRepeatingPadder
}
if (padder instanceof StringPadder) {
    padder;
    //     ^ = let padder: StringPadder
}
// polymorphic this types
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
var v = new BasicCalculator(2).multiply(5).add(1).currentValue();
// index types
function pluck(o, propertyNames) {
    return propertyNames.map(function (n) { return o[n]; });
}
var taxi = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2014,
};
var makeAndModel = pluck(taxi, ["manufacturer", "model"]);
function getProperty(o, propertyName) {
    return o[propertyName]; // o[propertyName] is of type T[K]
}
var manufacturer = getProperty(taxi, "manufacturer");
var year = getProperty(taxi, "year");
function foo(x) {
    // Has type 'U extends Foo ? string : number'
    var a = f(x);
    // This assignment is allowed though!
    var b = a;
}
//   ^ = type T2 = never
