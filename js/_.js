

export function _(id) {

	var type = id.split('@')[0];
	var guid = id.split('@')[1];

	var object = _.prototype.map[id];

	if( !object ) {

		object = ( window[ type ] ) ? new window[ type ]( id ) : new Object();
		object.id = guid;

		if( !object.set )
		object.set = function( params ) {
			for( var p in params ) {
				this[ p ] = params[ p ];
			}
			return this;
		}

		if( !object.update )
		object.update = function() {}

		_.prototype.map[ id ] = object;

	}

	return object;
}

_.prototype = {
	map: {}
};
