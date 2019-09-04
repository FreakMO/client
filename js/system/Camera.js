

function Camera() {
	
	var scene = _( 'Scene' ).handle;
	
	//> get default configs
	var type	= _( 'Config' ).camera_type || 'PERSPECTIVE';
	var fov 	= _( 'Config' ).camera_fov || 30;
	var aspect 	= _( 'Config' ).camera_aspect || window.innerWidth / window.innerHeight;
	var near	= _( 'Config' ).camera_near || 1;
	var far		= _( 'Config' ).camera_far || 5000;
	
	var pos		= _( 'Config' ).camera_position || { x: 2000, y: 2000, z: -1000 };
	var look	= _( 'Config' ).camera_look || { x: 0, y: 0, z: 0 };
	
	var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.set( pos.x, pos.y, pos.z );
	camera.lookAt( look.x, look.y, look.z );
	
	this.handle = camera;
	
	this.update = function() {

	}
	
}

export {Camera};