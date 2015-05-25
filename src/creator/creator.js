function JCreator() {
	this.GamePaused = false;
	this.x = 0;
	this.y = 0;
	this.mouseX = 0;
	this.mouseY = 0;
	this.view = {};
}

JCreator.prototype.handleMouse = function (e) {
	this.mouseX = e.offsetX;
	this.mouseY = e.offsetY;
};

JCreator.prototype.setupDOM = function () {
	var self = this;

	this.canvas = document.getElementById("main-canvas");
	this.context = this.canvas.getContext("2d");
	this.context.font="20px Georgia";

	this.addTileButton = document.getElementById("btn_add_tile");

	this.addTileButton.addEventListener("click", function (e) {
		console.log("Adding a tile");
	});

	this.canvas.addEventListener("mousemove", self.handleMouse.bind(self));
};

JCreator.prototype.loadAssets = function () {

};

JCreator.prototype.render = function () {
	this.context.clearRect(0, 0, 800, 600);
	this.context.fillText("Frame: " + this.mouseX + "," + this.mouseY, 10, 50);
};

JCreator.prototype.update = function (delta) {

};