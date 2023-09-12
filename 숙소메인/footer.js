// 지역이동 버튼 기능구현

let sel = document.getElementById('sp_1');

sel.addEventListener('mouseenter', function () {
    // console.log("마우스 올라감")
    sel.setAttribute("src", "./images/지역선택 (1).png");
})

sel.addEventListener('mouseleave', function () {
    sel.setAttribute("src", "./images/지역선택_원본 (1).png");
    // console.log("마우스 벗어남")
})

sel.addEventListener('click', function () {
    location.href = "./아산_천안_페이지/cheonAn_main.html"
})

let sel_2 = document.getElementById('sp_2');

sel_2.addEventListener('mouseenter', function () {
    // console.log("마우스 올라감")
    sel_2.setAttribute("src", "./images/지역선택 (2).png");
})

sel_2.addEventListener('mouseleave', function () {
    sel_2.setAttribute("src", "./images/지역선택_원본 (2).png");
    // console.log("마우스 벗어남")
})

sel_2.addEventListener('click', function () {
    location.href = "./아산_천안_페이지/asan_main.html"
})

let sel_3 = document.getElementById('sp_3');

sel_3.addEventListener('mouseenter', function () {
    // console.log("마우스 올라감")
    sel_3.setAttribute("src", "./images/지역선택 (3).png");
})

sel_3.addEventListener('mouseleave', function () {
    sel_3.setAttribute("src", "./images/지역선택_원본 (3).png");
    // console.log("마우스 벗어남")
})

let sel_4 = document.getElementById('sp_4');

sel_4.addEventListener('mouseenter', function () {
    // console.log("마우스 올라감")
    sel_4.setAttribute("src", "./images/지역선택 (4).png");
})

sel_4.addEventListener('mouseleave', function () {
    sel_4.setAttribute("src", "./images/지역선택_원본 (4).png");
    // console.log("마우스 벗어남")
})

let sel_5 = document.getElementById('sp_5');

sel_5.addEventListener('mouseenter', function () {
    // console.log("마우스 올라감")
    sel_5.setAttribute("src", "./images/지역선택 (5).png");
})

sel_5.addEventListener('mouseleave', function () {
    sel_5.setAttribute("src", "./images/지역선택_원본 (5).png");
    // console.log("마우스 벗어남")
})


let sel_6 = document.getElementById('sp_6');

sel_6.addEventListener('mouseenter', function () {
    // console.log("마우스 올라감")
    sel_6.setAttribute("src", "./images/지역선택 (6).png");
})

sel_6.addEventListener('mouseleave', function () {
    sel_6.setAttribute("src", "./images/지역선택_원본 (6).png");
    // console.log("마우스 벗어남")
})
