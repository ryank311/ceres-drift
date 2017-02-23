export default class DrawableManager {

    constructor(canvas) {
        this.canvas = canvas;
        this.drawableElements = {
            background: null,
            level: [],
            interactiveElements: [],
            enemies: [],
            friendly: [],
            player: [],
            effects: []
        };
    }

    drawFrame() {
        this.canvas.clear();
        if (this.drawableElements.background) {
            this.canvas.render(this.drawableElements.background);
        }
        for (let i = 0; i < this.drawableElements.level.length; i++) {
            this.canvas.render(this.drawableElements.level[i]);
        }
        for (let i = 0; i < this.drawableElements.interactiveElements.length; i++) {
            this.canvas.render(this.drawableElements.interactiveElements[i]);
        }
        for (let i = 0; i < this.drawableElements.enemies.length; i++) {
            this.canvas.render(this.drawableElements.enemies[i]);
        }
        for (let i = 0; i < this.drawableElements.friendly.length; i++) {
            this.canvas.render(this.drawableElements.friendly[i]);
        }
        for (let i = 0; i < this.drawableElements.player.length; i++) {
            this.canvas.render(this.drawableElements.player[i]);
        }
        for (let i = 0; i < this.drawableElements.effects.length; i++) {
            this.canvas.render(this.drawableElements.effects[i]);
        }
    }
}