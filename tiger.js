"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
    };
    Animal.prototype.makeSound = function () {
    };
    return Animal;
}());
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    Tiger.prototype.makeSound = function () {
        console.log("Tiger " + this.name + "makes " + "graunt sound");
    };
    return Tiger;
}(Animal));
exports.Tiger = Tiger;
var tiger = new Tiger("Leo");
tiger.makeSound();
