
var names = [
    "cone",
    "John",
    "Jen",
    "jason",
    "paul",
    "jone",
    "larry",
    "luie",
    "laura",
    "jim"
];

for (var i = 0; i < names.length; i++) {

    if (names[i].charAt(0).toLowerCase() === 'j') {
        console.log("Goodbye " + names[i]); 
    } else {
        console.log("Hello " + names[i]);
    }
}
