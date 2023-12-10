// random float

function random(min, max) {
    return min + Math.random() * ( max - min );
}

alert( random(1, 5) );
alert( random(2, 3) );
alert( random(3, 5) );

// random integer

function randomInteger(min, max) {
    let rand = min + Math.random() * ( max - min + 1);
    return( Math.floor( rand ) );
}

alert( randomInteger(1,5) );
alert( randomInteger(1,5) );
alert( randomInteger(1,5) );