var creator;

window.onload = function () {
	init();
};

/*
	This method should be the first thing to run
*/
function init() {
	creator = new JCreator();
	creator.setupDOM();
	console.log("going");
	startGameLoop();
};

function mainLoop() {
	if (creator.GamePaused) {
		console.log("Paused?");
		return;
	}
	console.log("Going");
	creator.render();
	
	var currentTick = window.performance.now();
	creator.update( (currentTick - creator.startTick) );
	creator.startTick = currentTick;
	creator.frame++;

	if (creator.frame === 30) {
		creator.frameCount++;
		creator.frame = 0;
	}
	
	// TODO: get rid of the bind
	requestAnimationFrame(mainLoop);
};

function startGameLoop () {
	creator.GamePaused = false;
	mainLoop();
}

