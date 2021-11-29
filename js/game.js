// 주사위 눈 값
var userValue = 0;
var computerValue = 0;

// 주사위 값 초기화
function valuesInit() {
  userValue = 0;
  computerValue = 0;
}

// 주사위 눈 값 얻기
function getDiceValue(compareDiceValue = 0) {
  var result = 0;
  for (;;) {
    result = Math.floor(((Math.random() * 10) % 6) + 1);
    if (result !== compareDiceValue) break;
  }

  return result;
}

// start 버튼 핸들러
function startButtonHandler() {
  // 주사위 눈 굴리기
  valuesInit();
  userValue = getDiceValue();
  computerValue = getDiceValue(userValue);

  console.log(`게임참여자 눈: ${userValue}, 컴퓨터 눈: ${computerValue}`);

  // page 이동
  location.href = "result.html";
}
