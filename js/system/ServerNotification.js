

function ServerNotification() {
	
	//> инициализация объекта
	
	var scope = this;
	var timer;
	
	var info = document.createElement( 'div' );
	document.body.appendChild( info );
	
	info.style.fontFamily = "Arial";
	info.style.fontSize = "30px";  
	info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
	info.style.color = '#FF0000';
	info.style.fontWeight = "600";
	
	//> функция вызываемая на тик таймера
	
	function onTimer() {
		
		if( scope.time > 0 ) {
			
			scope.time--;
		
			var hours = Math.floor( scope.time / 3600 ); 		//> получили часы
			var minutes = Math.floor( scope.time % 3600 / 60 ); //> получили минуты
			var seconds = scope.time % 60;						//> получили секунды
		            if (minutes < 10) {minutes = "0" + minutes;}
			    if (seconds < 10) {seconds = "0" + seconds;}
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
