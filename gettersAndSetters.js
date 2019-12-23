/* Alter code below this line */
class Thermostat {
    constructor(temperatureF) {
        this._temperature = temperatureF;
    }
    //getter
    get temperature() {
        return 5/9 * (this._temperature -32);
    }
    //setter
    set temperature(temperatureC) {
        this._temperature = temperatureC * 9.0 / 5 + 32;
    }
}

/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);
