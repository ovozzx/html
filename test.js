var heading = document.querySelector('#heading'); //id="heading"인 요소를 찾아서 heading 변수에 저장 
    heading.onclick = function() { //클릭했을 때, 실행할 함수 정의
        heading.style.color = "red";
    }