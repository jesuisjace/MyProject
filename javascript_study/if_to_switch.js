let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert (0);
        break;
    case 1:
        alert (1);
        break;
    case 2:
    case 3:
        alert ('2,3');
        break; // case 가 더 없다면 없어도 됨
}