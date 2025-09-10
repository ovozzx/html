// 배열
var scores = [100, 200, 300];

// 자바의 배열과 차이점
// 자바의 배열
//  배열이 만들어진 이후 값을 추가하거나 삭제하는 것이 불가능
// 자바 스크립트의 배열
//  배열이 만들어진 이후 값을 추가하거나 삭제하는 것이 자유롭다
console.log(scores);

for (var i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

// for-each (for-in)
for (var i in scores) {
  // i에 index가 들어감
  console.log(i);
  console.log(scores[i]);
}

// 배열에 값 추가
// (1)
scores[3] = 99;
console.log(scores);
// (2)
scores.push(500); // 배열 뒤에 넣음
scores.unshift(10); // 배열 앞에 넣음
console.log(scores);

// 배열에 값 삭제
// (1)
scores.pop(); // 배열의 마지막 인덱스를 삭제
scores.shift(); // 배열의 첫번째 인덱스를 삭제
console.log(scores);
// (2)
scores.splice(1, 2); // 배열에서 1번 인덱스부터 2개 지워라
console.log(scores);
