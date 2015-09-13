'use strict';

var Animal = require('./Animal');

function Elephant(name) {
    this.name = name;
};

Elephant.prototype = new Animal();
Elephant.prototype.constructor = Elephant;

Elephant.prototype.getRoar = function () {
    console.log('####################');
}

module.exports = Elephant;