 class Shape {
    constructor(text, textColor, shape, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor; 
    }
    getShape = () => this.shape;
    getShapeColor = () => this.shapeColor;
    getText = () => this.text;
    getTextColor = () => this.textColor;

 };

 class Circle extends Shape{
    render(){
        return `<svg> <h1 style='color: ${this.textColor}'> ${this.text} </h1> <circle cx="150" cy="150" r="50" fill="${this.shapeColor}" /> </svg>`
    }
 };

 class Triangle extends Shape{
    render(){
        return `<svg> <h1 style='color: ${this.textColor}'> ${this.text} </h1> <polygon points = "150,20 250,180 50,180"  fill="${this.shapeColor}" /> </svg>`
    }
 };

 class Square extends Shape{
    render(){
        return `<svg> <h1 style='color: ${this.textColor}'> ${this.text} </h1> <rect x=100 y=150 width=150 height=150  fill="${this.color}" /> </svg>`
    }
 };

 module.exports={Circle,Triangle,Square}