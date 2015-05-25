var WorldList = {};

function JWorld (name){
	this.id = _.uniqueId();
	this.scene = new WorldScene();

	this.name = name;
	this.GamePaused = true;
	this.frameSize = 1000 / 30;
	this.startTick = window.performance.now();
	this.currentTick = 0;
	this.frame = 0;
	this.frameCount = 0;
};

function lookupWorld (name) {
	return _.find(WorldList, { name: name });
}

function getWorldById (id) {
	return _.has(WorldList, id) && JWorldList[id];
}

function createWorld (name) {
	var world = new JWorld(name);

	WorldList[world.id] = world;
	return world;
}