export default class Renderer {

    constructor(drawManager) {
        this.drawManager = drawManager;
    }

    startGameThread() {
        window.requestAnimationFrame(this.tick);
    }

    tick = (timestamp) => {
        this.drawManager.drawFrame();
    };
}