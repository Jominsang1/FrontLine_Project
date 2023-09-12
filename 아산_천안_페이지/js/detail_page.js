window.addEventListener("load", function () {
    let address = '';

    let address1 = "휴먼교육센터";
    let title = '';
    let titleSub = '';
    let info = '';
    let desc = '';

    let html_food = '';


    $.ajax({
        url: "ch_data.html",
        dataType: 'html',
        success: function (ch) {

            let htmlDom = new DOMParser().parseFromString(ch, 'text/html');
            let tableDom = htmlDom.documentElement

            let arr_ch_food = tableDom.querySelectorAll(".ch_food")
            let arr_ch_food_img = tableDom.querySelectorAll(".ch_food .image")
            let arr_ch_food_title = tableDom.querySelectorAll(".ch_food .title")
            let arr_ch_food_address = tableDom.querySelectorAll(".ch_food .address")
            let arr_ch_food_info = tableDom.querySelectorAll(".ch_food .info")
            let arr_ch_food_desc = tableDom.querySelectorAll(".ch_food .desc")
            let arr_ch_food_tell = tableDom.querySelectorAll(".ch_food .tell")

            let div_title = document.querySelector('.place')
            let div_text = document.querySelector('.text')
            let div_title_sub = document.querySelector('.title')
            let div_info = document.querySelector('.info')
            // let div_info1 = document.querySelector('.info1')
            // let div_tell = document.querySelector('.info')

            let ch_food_img;
            // console.log(ch_food_img)


            // for (let i = 0; i < arr_ch_food_img.length; i++) {
            //     // if(arr_ch_food[i] == arr_ch_food_img[i]){
            //     // console.log(arr_ch_food_img[i].innerHTML)
            //     // }
            // }



            console.log(title)
            for (let i = 0; i < arr_ch_food_img.length; i++) {

                ch_food_img = arr_ch_food_img[i];

                let ch_food_title = arr_ch_food_title[i].innerHTML
                let ch_food_address = arr_ch_food_address[i].innerHTML
                let ch_food_info = arr_ch_food_info[i].innerHTML
                let ch_food_desc = arr_ch_food_desc[i].innerHTML
                let ch_food_tell = arr_ch_food_tell[i].innerHTML

                if (i == 0) {
                    title = ch_food_title;
                    // console.log(title)
                    address = ch_food_address;
                    info = ch_food_info;
                    desc = ch_food_desc;
                    tell = ch_food_tell;
                    console.log(address)
                }

                // console.log(ch_food_img)

                // 만약 title 값이 ch_food_title[배열] 값과 같다면 사진을 출력해라 if 문
                if (title == ch_food_title) {
                    titleSub += '천안 맛집으로 소문난<br>'
                    html_food += `<div class="food">${ch_food_img.innerHTML}</div>`

                }
                // for (let j = 0; j < ch_food_img.length; j++) {
                //     let imgs = ch_food_img[j]
                //     // console.log(imgs)
                //     html_food += `<div class="food">${imgs.outerHTML}</div>`
                // }


            }
            // console.log(ch_food_img)

            // document.querySelector(".div1").innerHTML = title
            document.querySelector('.food_item').innerHTML = html_food
            div_title.innerHTML = title
            div_text.innerHTML = desc
            div_title_sub.innerHTML = titleSub + title

            div_info.innerHTML += `<li4>문의 및 안내 : ${tell}</li4>`
            div_info.innerHTML += `<li4>편의 정보 : ${info}</li4><br>`
            div_info.innerHTML += `<li4>주소 : ${address}</li4>`



            food_slide();


            let comment_li = document.getElementById("comment-list");
            let comment_ipt = document.getElementById("comment-input");
            let submit_btn = document.getElementById("submit-comment");


            // 댓글 버튼 등록
            submit_btn.addEventListener("click", function () {
                // 댓글 인풋창 값 문자열을 좌우 공백 제거하고 comment_txt 변수에 집어넣어라
                let comment_txt = comment_ipt.value.trim();
                // let hr_line = document.createElement("hr")

                // console.log(hr_line)
                // 만약 입력값이 있다면 commentItem 에 newComment(전달인자) 메소드 실행
                // List태그 형식이면 자연스럽게 들어쓰기가 가능하기떄문에 깔끔쓰
                if (comment_txt !== "") {
                    let commentItem = newCommnet(comment_txt);
                    // <ul>태그에 appendChild 로 CommentItem 에 들어가있는 들어쓰기 메소드값이 적용
                    comment_li.appendChild(commentItem);
                    // comment_li.appendChild(hr_line)
                    comment_ipt.value = "";

                    // 만약 입력값이 없으면 alert 발생
                } else {
                    alert("내용을 입력해주세요")
                }
            });

            // 대댓글 생성

            let count = 0;
            function newCommnet(text) {
                // li 태그 생성자
                let li = document.createElement("li");
                li.setAttribute('class', 'cmt_list')
                // 생성 후 text 입력값 넣기
                li.textContent = text;

                // 답글,삭제 버튼 요소 생성
                let reply_btn = document.createElement("button");
                let delete_btn = document.createElement("button");

                delete_btn.setAttribute('class', 'delete');
                delete_btn.textContent = "삭제";
                reply_btn.setAttribute('class', 'reply');
                reply_btn.textContent = "답글 작성";

                reply_btn.addEventListener("click", function () {
                    let reply = prompt("답글을 입력하세요:");
                    if (reply == "") {
                        alert("대댓글 내용을 입력해주세요")
                    } else {
                        let replyItem = newCommnet(reply);
                        li.appendChild(replyItem);
                        li.style.textDecoration = "solid";
                    }
                });

                let list = document.querySelectorAll('.cmt_list');
                console.log(list)
                // let hr_delete = document.getElementsByTagName('hr')
                for (let i = 0; i < list.length + 1; i++) {
                    delete_btn.addEventListener("click", function () {
                        // console.log(hr_delete)
                        li.innerHTML = '삭제된 글입니다.';
                        li.appendChild(delete_btn);
                        for (let j = 0; j < i + 1; j++) {
                            delete_btn.addEventListener('click', function () {
                                li.remove();
                            })
                        }

                    })
                }

                li.appendChild(reply_btn);
                li.appendChild(delete_btn);
                return li;

            }



            // map();
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 2 // 지도의 확대 레벨
                };

            // 지도를 생성합니다    
            var map = new kakao.maps.Map(mapContainer, mapOption);

            // if (navigator.geolocation) {


            //     navigator.geolocation.getCurrentPosition(function (position) {

            //         var lat = position.coords.latitude,
            //             lon = position.coords.longitude;

            //         var locPosition = new kakao.maps.LatLng(lat, lon)
            //         presentPosition = locPosition;

            //         map.setCenter(locPosition);
            //         console.log(lat, lon)
            //     });

            // } else {

            //     var locPosition = new kakao.maps.LatLng(37.566826, 126.9786567)
            //     alert('현재 위치를 찾을 수 없습니다!');
            // }



            var geocoder = new kakao.maps.services.Geocoder();


            geocoder.addressSearch(address, function (result, status) {


                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {

                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new kakao.maps.InfoWindow({
                        content: `<div style="width:150px;text-align:center;padding:6px 0;">${title}</div>`
                    });
                    infowindow.open(map, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                }

                let find = document.querySelector('.findWay')
                find.addEventListener('click', function () {
                    location.href = "https://map.kakao.com/?sName=" + address1 + "&eName=" + address
                })
            });
        }

    });


});

let currentIndex = 1;
function food_slide() {
    let slides = document.querySelector('.food_item')
    let slideimg = document.querySelectorAll('.food').length;
    // console.log(currentIndex)
    if (currentIndex >= slideimg) {
        currentIndex = 0;
    }
    setInterval(function () {
        slides.style.transform = "translateX(-" + currentIndex * "1245" + "px)";
        slides.style.transition = "transform 0.4s ease-in-out";
        currentIndex++;
        //  console.log(currentIndex)

        if (currentIndex === slideimg + 1) {
            currentIndex = - 1;
        }
    }, 1500);
}
