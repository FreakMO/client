

function WebService() {
	
	var remote_host 	= _( 'Config' ).remote_host || 'localhost';
	var remote_port 	= _( 'Config ').remote_port || 8080;
	var remote_service 	= _( 'Config' ).remote_service || 'gameplay';
	
	var connection_string = 'ws://' + remote_host + ':' + remote_port + '/' + remote_service;
	
	var onWebSocketOpen = function() {

		console.log('Connection open');

	}
	
	var onWebSocketClose = function() {

		console.log('Connection closed');
	}
	
	var onWebSocketMessage = function( event ) {

		var json = JSON.parse( event.data );
		
		_( json.command ).set( json ).update();
	}
	

	var ws = new WebSocket( connection_string );
	ws.onopen = onWebSocketOpen;
	ws.onclose = onWebSocketClose;
	ws.onmessage = onWebSocketMessage;
	
	this.handle = ws;

}
export {WebService};