// while 문을 쓰는 경우


function network() {
    if (Math.floor(Math.random() * 100) < 10) {
        return true;
    } else {
        return false;
    }
}

while (true) {
    console.log('while....');
    if (network()) {
        console.log('BREAK!!!');
        break;
    }
}