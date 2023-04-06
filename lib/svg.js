class Svg {
    constructor() {
        this.text = "";
        this.shape= ""
    }

    render(){
        return `<svg version="1.1" width= 300 height= 200> ${this.shape} ${this.text} </svg>`
    }
    
    setText(message, color){
       
    }

}