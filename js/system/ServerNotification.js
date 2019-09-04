

function ServerNotification() {
	
	//> инициализация объекта
	
	var scope = this;
	var timer;
	
	//> функция вызываемая на тик таймера
	
	function onTimer() {
		
		if( scope.time > 0 ) {
			
			scope.time--;
		
			var hours = Math.floor( scope.time / 3600 ); 		//> получили часы
			var minutes = Math.floor( scope.time % 3600 / 60 ); //> получили минуты
			var seconds = scope.time % 60;						//> получили секунды
		
			console.log( scope.message + ' через ' + hours + ':' + minutes + ':' + seconds );
			
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