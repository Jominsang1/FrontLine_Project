
window.addEventListener("load", bind);

    function bind(){
            // 여행지 우클릭 슬라이드
            let currentSlide = 1;

            document.getElementById('btn2').addEventListener('click', function () {
                console.log(1)
                // let counter = 1;
                // console.log(counter)
                let slides = document.querySelector('.slide_list')
                let slideimg = document.querySelectorAll('.sleep').length;
                let imgcount = document.querySelector('#count')
                if (currentSlide == 4) {
                    imgcount.innerHTML = ("1" + " " + "/" + " " + "4")
                } else {
                    imgcount.innerHTML = (currentSlide + 1 + " " + "/" + " " + 4)
                }
                // counter =-1;
                // console.log(slideimg)
                console.log(currentSlide);
                if (currentSlide >= slideimg - 1) {
                    currentSlide = 0;
                }
                slides.style.transform = "translateX(-" + currentSlide * "550" + "px)";
                slides.style.transition = "transform 0.4s ease-in-out";
                currentSlide++;
            });

            // 여행지 좌클릭 슬라이드           
            // let currentSlide = 1;

            document.getElementById('btn1').addEventListener('click', function () {
                let slides = document.querySelector('.slide_list')
                let slideimg = document.querySelectorAll('.sleep').length;
                let imgcount = document.querySelector('#count')
                if (currentSlide == 1) {
                    imgcount.innerHTML = (4 + " " + "/" + " " + 4)
                } else {
                    imgcount.innerHTML = (currentSlide - 1 + " " + "/" + " " + 4)
                }
                console.log("abc :", imgcount)
                // console.log('no2 :',slideimg)
                // console.log('no2 :', currentSlide)
                if (currentSlide === 1) {
                    console.log(currentSlide)
                    currentSlide = slideimg - 1;
                } else {
                    currentSlide--;
                }
                slides.style.transform = "translateX(-" + (currentSlide - 1) * "550" + "px)";
                slides.style.transition = "transform 0.4s ease-in-out";

            });

        }