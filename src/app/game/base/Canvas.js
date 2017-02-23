export default class Canvas {
    constructor(element) {
        this.canvas = document.getElementById(element);
        this.canvas2dContext = this.canvas.getContext('2d');
    }

    clear() {
        this.canvas2dContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    render(drawable) {
        this.canvas2dContext.fillStyle = 'rgb(200, 0, 0)';
        this.canvas2dContext.fillRect(10, 10, 50, 50);
    }
}


