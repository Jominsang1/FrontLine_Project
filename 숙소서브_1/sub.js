$.ajax({
    url: "ch_data.html",
    dataType: 'html',
    success: function (ch) {

        let htmlDom = new DOMParser().parseFromString(ch, 'text/html');
        let tableDom = htmlDom.documentElement

        // let arr_ch_play = tableDom.querySelectorAll(".ch_play")
        let arr_ch_play_img = tableDom.querySelectorAll(".ch_play .image")
        let arr_ch_play_title = tableDom.querySelectorAll(".ch_play .title")
        let arr_ch_play_address = tableDom.querySelectorAll(".ch_play .address")
        // let arr_ch_play_info = tableDom.querySelectorAll(".ch_play .info")
        // let arr_ch_play_desc = tableDom.querySelectorAll(".ch_play .desc")
        // let arr_ch_play_tell = tableDom.querySelectorAll(".ch_play .tell")

        // let div_title = document.querySelector('.place')
        // let div_text = document.querySelector('.text')
        // let div_title_sub = document.querySelector('.title')
        // let div_info = document.querySelector('.info')
        // let div_info1 = document.querySelector('.info1')
        // let div_tell = document.querySelector('.info')

        let ch_play_img;


        // console.log(title)
        for (let i = 0; i < arr_ch_play_img.length; i++) {

            ch_play_img = arr_ch_play_img[i];

            let ch_play_title = arr_ch_play_title[i].innerHTML
            let ch_play_address = arr_ch_play_address[i].innerHTML
            // let ch_play_info = arr_ch_play_info[i].innerHTML
            // let ch_play_desc = arr_ch_play_desc[i].innerHTML
            // let ch_play_tell = arr_ch_play_tell[i].innerHTML

            if (i == 1) {
                title = ch_play_title;
                // console.log(title)
                address = ch_play_address;
                // info = ch_play_info;
                // desc = ch_play_desc;
                // tell = ch_play_tell;
                console.log(address)
            }

            // console.log(ch_play_img)

            // 만약 title 값이 ch_play_title[배열] 값과 같다면 사진을 출력해라 if 문
            // if (title == ch_play_title) {
            //     titleSub += '천안 맛집으로 소문난<br>'
            //     html_play += `<div class="play">${ch_play_img.innerHTML}</div>`

            // }

            // map();
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = {
                    center: new kakao.maps.LatLng(36.807291, 127.14716), // 지도의 중심좌표
                    level: 2 // 지도의 확대 레벨
                };

            // 지도를 생성합니다    
            var map = new kakao.maps.Map(mapContainer, mapOption);

            // 주소-좌표 변환 객체를 생성합니다
            var geocoder = new kakao.maps.services.Geocoder();

            // 주소로 좌표를 검색합니다

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
            });
        }
    }
})