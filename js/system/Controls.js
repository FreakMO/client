import {MapControls} from "../controls/MapControls.js";

function Controls() {
	
	var camera 		= _( 'Camera' ).handle;
	var renderer 	= _( 'Render' ).handle;
	
	this.update = function() {
		var controls = new MapControls( camera, renderer.domElement );
		controls.target.set( 0, 2, 0 );
		controls.update();
	
		_( 'GameClient' ).update();
	}
}

export {Controls};