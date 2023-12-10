function readNumber() {
    let num;
    do {
        num = prompt( "Enter a number: ", ""); // +prompt 를 하면 빈 문자열과 null은 숫자로 변환 시 0이 되므로 + 없이 그냥 prompt 사용
    } while ( !isFinite(num) );

    if( num === null || num === '' ) return null;

    return +num;
}

alert( `Read: ${readNumber()}` );