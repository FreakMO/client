import {OrbitControls} from "../controls/OrbitControls.js";

function GameClient() {
	
	var scope = this;

	var scene 		= _( 'Scene' ).handle;
	var camera 		= _( 'Camera' ).handle;
	var grid 		= _( 'Grid' ).handle;
	var renderer 	= _( 'Render' ).handle;
	
	this.camera = camera;
	this.scene = scene;
	this.renderer = renderer;
	
	//> Game Cycle
	function render() {
		renderer.render( scene, camera );
	}
	
	function animate() {
		requestAnimationFrame( animate );
		render();
	}
	
	//> Redefined update function
	this.update = function() {
		
		animate();
		
	}
}

export {GameClient};