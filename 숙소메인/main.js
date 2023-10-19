// 메인 슬라이드 기능구현

function bind() {

    let slides = document.querySelector('.slide_list');
    let slide = document.querySelectorAll('.slide_list li');
    let currentIdx = 0;
    let s_count = 1;
    let slideCount = slide.length;
    let slideWidth = 400;
    let slideMargin = 20;
    let prevBtn = document.querySelector('#btn1');
    let nextBtn = document.querySelector('#btn2');
    let count = document.querySelector('#count')

    makeClone();

    function makeClone() {
        for (let i = 0; i < slideCount; i++) {
            // a.cloneNode() : a요소를 그대로 복사함
            // a.cloneNode(true) : a요소의 자식요소까지 복사함
            let cloneSlide = slide[i].cloneNode(true);
            // 복사한 리스트목록에 클래스 이름 지정
            cloneSlide.classList.add('clone');

            slides.appendChild(cloneSlide);
        }

        for (let i = slideCount - 1; i >= 0; i--) {
            let cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');

            slides.prepend(cloneSlide);
        }

        updateWidth();
        setInitialPos();

        // 클론을 만든후에 animated class를 적용시켜라
        // 0.1초뒤에 앞에 내용을 배치 후 적용시켜라(x값이 적용이 되는 과정이 안보임)
        setTimeout(function () {
            slides.classList.add('animated');
        }, 100);


    }

    // ul 전체 길이 지정 함수
    // ul태그의 전체 길이를 지정해서 li태그 나열
    function updateWidth() {
        let currentSlides = document.querySelectorAll('.slide_list li')
        console.log(currentSlides)

        // 클론된 슬라이드 개수가 저장됨
        let newSlideCount = currentSlides.length;

        // (이미지 넓이 + 마진) * li태그 개수 - 마지막 이미지 마진값 + px
        let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
        slides.style.width = newWidth;
    }

    function setInitialPos() {

        var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
        // x좌표측으로 -initialTranslateValue만큼 이동해라
        slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
    }
    // 오른쪽 버튼
    nextBtn.addEventListener('click', function () {
        moveSlide(currentIdx + 1);
        console.log(s_count, slideCount);
        
        if(s_count == 4){
            s_count = 1;
            count.innerHTML = ("1" + " " + "/" + " " + "4");
        } else {
            s_count ++;
            count.innerHTML = (s_count + " " + "/" + " " + 4)
        }
        
    });
    
    // 왼쪽 버튼
    prevBtn.addEventListener('click', function () {
        moveSlide(currentIdx - 1);
        console.log(s_count, slideCount);

        if(s_count == 1){
            s_count = 4;
            count.innerHTML = ("4" + " " + "/" + " " + "4");
        } else{
            count.innerHTML = (s_count - 1 + " " + "/" + " " + 4)
            s_count --;
        }
        // -1 -2 -3 -4 1 2 3 4
    });
    

    // num은 moveSlide의 값으로 moveSlide가 1일때 px값으로 이동
    // 2일때 더한만큼의 px값으로 이동 -1이 되면 뺀 만큼의 px값으로 이동

    // 버튼을 클릭했을시 어떻게 작동하는지 서술
    function moveSlide(num) {
        slides.style.left = -num * (slideWidth + slideMargin )+ 'px';
        currentIdx = num;

        setTimeout(function () {
            // currentIdx가 5일때 -5일때 원 좌표로 회귀
            if (currentIdx == slideCount || currentIdx == -slideCount) {
                slides.classList.remove('animated');
                slides.style.left = '0px';
                currentIdx = 0;
            }
        }, 500);

        // 0.1초 뒤에 animated다시 추가
        setTimeout(function () {
            slides.classList.add('animated');
        }, 600);

        // 반대쪽
        // setTimeout(function () {
        //     if (currentIdx == -slideCount) {
        //         slides.classList.remove('animated');
        //         slides.style.left = '0px';
        //         currentIdx = 0;
        //     }
        // }, 500);

        // // 0.1초 뒤에 animated다시 추가
        // setTimeout(function () {
        //     slides.classList.add('animated');
        // }, 600);
    }
}

// 슬라이드 클릭을 하면
// 카운트가 올라가고 슬라이드 값이 5가 되면
// 다음 카운트가 1로 초기화되고

// prev 버튼을 누르면 -1이되고 count가 -1 == 

