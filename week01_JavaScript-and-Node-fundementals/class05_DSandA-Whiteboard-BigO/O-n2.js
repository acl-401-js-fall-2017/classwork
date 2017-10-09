const count = 100000;

const arr = [];

for ( var i = 0; i < count; i++ ) {
	arr[i] = `hello ${i}`;
}

function findDups( arr ) {
	arr.forEach( ( each, i ) => {
		if(arr.indexOf( each, i + 1 ) !== -1) return true;
	});
	return false;
}
console.log( 'count', count );
console.time( 'find dups' );
console.log( findDups( arr ) );
console.timeEnd( 'find dups' );
