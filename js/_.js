/*
_t = (type, id) => type + '@' + id.split('@')[1];
_type = (id) => id.split('@')[0];
_uuid = (id) => id.split('@')[1];
*/	
export function _(id) {
	
	var type = id.split('@')[0];
	var guid = id.split('@')[1];
	
	var object = _.prototype.map[id];
		
	if (!object) {
		
		object = ( window[type] ) ? new window[type](id) : new Object();
		object.id = id;
			
		if (!object.set)
		object.set = function( params ) {
			for(var p in params) {
				this[p] = params[p];
			}
			return this;
		}
			
		if (!object.req)
		object.req = function( params ) {
				
		}

		if (!object.get)
		object.get = function() {
			return this;
		}
		
		if (!object.update)
		object.update = function() {
			
		}
			
		_.prototype.map[id] = object;
		
	}
	
	return object;
}
	
_.prototype = {
	map: {}
};
