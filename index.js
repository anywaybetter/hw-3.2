var line1 = prompt("Введіть перший рядок:");
var line2 = prompt("Введіть другий рядок:");
var line3 = prompt("Введіть третій рядок:");

var lines = [line1, line2, line3];

lines.sort(function() {
    return Math.random() - 0.5;
});

console.log("Рядки:");
for (var i = 0; i < lines.length; i++) {
    console.log(lines[i]);
}