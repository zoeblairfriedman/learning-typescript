// arguments can't use inference, must use annotation
// output can use inference, but we shouldn't use it
var add = function (a, b) {
    return a + b;
};
var sub = function (a, b) {
    return a - b;
};
// alt syntax
function divide(a, b) {
    return a / b;
}
var multiply = function (a, b) {
    return a * b;
};
// void & never
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    throw new Error(message);
};
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
