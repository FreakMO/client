

function ServerNotification() {
	
	//> инициализация объекта
	
	var scope = this;
	var timer;
	
	var info = document.createElement( 'div' );
	document.body.appendChild( info );
	
	info.style.position = 'absolute';
	info.style.top = '10px';
	info.style.width = '100%';
	info.style.textAlign = 'center';
	info.style.color = '#fff';
	
	//> функция вызываемая на тик таймера
	
	function onTimer() {
		
		if( scope.time > 0 ) {
			
			scope.time--;
		
			var hours = Math.floor( scope.time / 3600 ); 		//> получили часы
			var minutes = Math.floor( scope.time % 3600 / 60 ); //> получили минуты
			var seconds = scope.time % 60;						//> получили секунды
		
			info.innerHTML = scope.message + ' через ' + hours + ':' + minutes + ':' + seconds;
			
		} else {
			
			clearInterval( timer );
			
			console.log( scope.message );
			
		}
		
	}
	
	this.update = function() {
		
		if (scope.time) {
			
			if( timer ) clearInterval( timer );
			timer = setInterval( onTimer, 1000 );
			
		}
		
	}
}

export {ServerNotification}