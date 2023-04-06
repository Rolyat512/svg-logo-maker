const {Circle, Triangle, Square} = require("./shapes.js");
const { writeFile } = require('fs');

module.exports = a => {
    if(a.shape="triangle") writeFile("./examples/logo.svg", JSON.stringify(new Triangle(a.text, a.textColor, a.shape, a.shapeColor)), err => {
        if(err) throw err;
        console.log('Generated logo.svg');
    })
}