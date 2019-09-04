

function Grid() {
	
	var scene = _( 'Scene' ).handle;
	var camera = _( 'Camera' ).handle;
	
	var size 		= _( 'Config' ).grid_size || 5000;
	var divisions 	= _( 'Config' ).grid_divisions || 50;
	
	var grid = new THREE.GridHelper( size, divisions );
	
	scene.add( grid );

	this.handle = grid;
		
}

export {Grid};