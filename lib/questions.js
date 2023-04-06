const questions = [
    {
        "type": "input",
        "name": "text",
        "message": "What is the text on the logo (1 to 3 letters)?",
        "validate": text => text.length<4 || "The logo text cannot be more than three letters."
    },
    {
        "type": "input",
        "name": "textColor",
        "message": "What color would you like the text color to be?"
    },
    {
        "type": "list",
        "name": "shape",
        "message": "What shape would you like your logo to be?",
        "choices": ["square", "circle", "triangle"]
    },
    {
        "type": "input",
        "name": "shapeColor",
        "measage": "What would you like the shape's color to be?"
    }
];

module.exports = questions;