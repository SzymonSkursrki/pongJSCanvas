class PongRacket extends Rectangle {
    controlAI = true;
    constructor(id, canvasId) {
        super(id, canvasId);
        this.vectorX = 0; //cannot move in X
    }
    move() {
        this.vectorX = 0; //cannot move in X
        super.move();
    }
    bounce(el) {
    }
    edgeCollisionEffectsBottom() {
        this.vectorY = 0;
        this.y = this.getCanvas().height - this.height;
    }
    edgeCollisionEffectsTop() {
        this.vectorY = 0;
        this.y = 0;
    }
}