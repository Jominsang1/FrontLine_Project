window.addEventListener("load", function(){

    header_menu();
    header_search();

})


function header_menu() {

    // 카운트값 이용해서 마우스 위치 파악해서 메뉴팝업
    let pop_count = 0;
    let count = 0;
    let menu_img = document.querySelector(".threeline img")
    // console.log(menu_img)
    let menu_list = document.querySelector(".threeline .menu")
    // console.log(menu_list)
    let display = document.querySelector("body")

    menu_img.addEventListener("click", function () {
        if (count == 0) {
            menu_list.style.display = "block"
            count = 1;
        } else {
            menu_list.style.display = "none"
            count = 0;
        }
    })

    menu_img.addEventListener("mouseover", function () {
        pop_count = 1;
    })

    menu_img.addEventListener("mouseout", function () {
        pop_count = 0;
    })

    menu_list.addEventListener("mouseover", function () {
        pop_count = 1;
    })

    menu_list.addEventListener("mouseout", function () {
        pop_count = 0;
    })

    // body태그를 눌렀을때 메뉴가 사라지는 기능구현
    display.addEventListener("click", function () {
        if (pop_count == 0) {
            menu_list.style.display = "none"
            count = 0;
        }
    })

};


function header_search() {
    // 카운트값 이용해서 마우스 위치 파악해서 메뉴팝업
    let pop_count2 = 0;
    let target = document.querySelector(".search")
    // console.log(target)
    let display = document.querySelector("body")
    let input = document.querySelector(".input_list")
    // console.log(input)

    // 마우스가 올라가 있는 상태에서
    target.addEventListener("mouseover", function () {
        pop_count2 = 1;
    })
    // 마우스가 벗어나 있는 상태에서
    target.addEventListener("mouseout", function () {
        pop_count2 = 0;
    })

    // 클릭을 했을때 작동한다
    display.addEventListener("click", function () {
        if (pop_count2 == 0) {
            let input = document.querySelector(".search")
            input.style.borderBottomRightRadius = "30px"
            input.style.borderBottomLeftRadius = "30px"
            document.querySelector(".input_list").style.display = "none"
        }
    })

    // 클릭을 했을때 작동한다
    target.addEventListener("click", function () {
        if (pop_count2 == 1) {
            target.style.borderBottomRightRadius = "0"
            target.style.borderBottomLeftRadius = "0"
            document.querySelector(".input_list").style.display = "block"
        }
    })
}


function header_pop() {
    let input = document.querySelector(".search")
    // console.log(input)
    input.addEventListener("keyup", function () {
        // console.log(document.querySelector(".ch").textContent)
        // console.log(input.value)
        let count = 0;
        let list = document.querySelectorAll(".input_list li")
        console.log(list);

        // console.log("result", String(list[0].textContent).search(input.value))
        // 일치 != -1 / 불일치 = -1

        for (let i = 0; i < list.length; i++) {
            if (String(list[i].textContent).search(input.value) == -1) {
                count += 1;
            }
        }

        if (count == list.length) {
            for (let i = 0; i < list.length; i++) {
                list[i].style.display = "flex"
                // console.log("reset")
            }
        } else {
            for (let i = 0; i < list.length; i++) {
                if (String(list[i].textContent).search(input.value) == -1) {
                    list[i].style.display = "none"
                } else {
                    list[i].style.display = "flex"
                }
            }
        }
    })
}