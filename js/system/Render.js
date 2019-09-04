

function Render() {
	
	var scope = document.createElement( 'div' );
	document.body.appendChild( scope );
	
	var renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	scope.appendChild( renderer.domElement );
	
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.shadowMap.enabled = true;
		
	this.handle = renderer;
	
}

export {Render};