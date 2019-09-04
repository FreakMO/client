

function Scene() {
	
	var background = _( 'Config' ).scene_background || 0x000000;
	
	var scene = new THREE.Scene();
	scene.background = new THREE.Color( background );
	scene.fog = new THREE.Fog( background, 4000, 5000 );
	
	var light = new THREE.AmbientLight( 0x666666 );
	scene.add( light );
	
	this.handle = scene;
	
}

export {Scene};