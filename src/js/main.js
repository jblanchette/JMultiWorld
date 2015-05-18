var world;

window.onload = function () {
	init();
};

/*
	This method should be the first thing to run
*/
function init() {
	world = new JWorld();
	world.setupDOM();

	startGameLoop();
};

function JWorld () {
	this.GamePaused = true;
	this.frameSize = 1000 / 30;
	this.startTick = window.performance.now();
	this.currentTick = 0;
	this.frame = 0;
	this.frameCount = 0;
};

JWorld.prototype.setupDOM = function () {
	var self = this;

	this.canvas = document.getElementById("main-canvas");
	this.context = this.canvas.getContext("2d");
	this.context.font="20px Georgia";

	this.pauseButton = document.getElementById("pause");

	this.pauseButton.addEventListener("click", function (e) {
		self.GamePaused = !self.GamePaused;

		if (!self.GamePaused) {
			console.log("Starting", self.GamePaused);
			startGameLoop();
		} else {
			console.log("Pausing");
		}
	});

	console.log("Canvas: ", this.canvas, this.pauseButton);
};

JWorld.prototype.render = function () {
	this.context.clearRect(0, 0, 800, 600);
	this.context.fillText("Frame: " + this.frameCount, 10, 50);
};

JWorld.prototype.update = function (delta) {

};

JWorld.prototype.gameLoop = function () {
	if (this.GamePaused) {
		return;
	}

	this.render();
	
	this.currentTick = window.performance.now();
	this.update( (this.currentTick - this.startTick) );
	this.startTick = this.currentTick;
	this.frame++;

	if (this.frame === 30) {
		this.frameCount++;
		this.frame = 0;
	}
	

	requestAnimationFrame(world.gameLoop.bind(world));
};

function startGameLoop () {
	requestAnimationFrame(world.gameLoop.bind(world));
}

