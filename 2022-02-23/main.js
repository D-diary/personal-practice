function random(){
  let result = '';
  let temp = 0;
  
  temp = Math.floor( Math.random() * 10 );

  if ( temp < 3 ) {
    result = '가위';
  } else if ( temp < 6) {
    result = '바위';
  } else {
    result = '보';
  }

  return result;
}

function com() {
  return random();
}

function user() {
  return random();
}

function win() {
  return '이겼다';
}

function lose() {
  return '졌다';
}

function draw() {
  return '무승부';
}


function gamestart() {
  console.log('가위 바위 보!');
  const u = user();
  const c = com();

  let result = lose();

  console.log(u, c);

  if ( u === c ) {
    result = draw();
  }
  
  if ( u === '가위' ) {
    if ( c === '보' ) {
      result = win();
    }
  }

  if ( u === '바위' ) {
    if ( c === '가위') {
      result = win();
    }
  }

  if ( u === '보' ) {
    if( c === '바위' ) {
      result = win();
    }
  }
  return result;
}

console.log(gamestart());



    // 랜덤
    // 유저
    // 컴퓨터
    // 가위, 바위, 보
    // 시작

    // 시작
    // 유저의 가위, 바위, 보를 선택할 수 있어야 한다.
    // 컴퓨터의 가위, 바위, 보는 랜덤으로 선택된다.
    // 컴퓨터는 가위를 선택한다.

    // 승패 기준은 유저를 기준으로 한다.
    // 유저가 이겼으면 '이겼다.'



