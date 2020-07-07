// My Item 공통 JS - common.js //

//// 로드구역 ///////////////////////
window.addEventListener("load",
    function () {
        console.log("로딩완료");
        // 로고에 class = "on" 을 넣기
        // css에 셋팅된 애니메이션 실행 /////////////
        var logo = document.getElementById("logo");
        setInterval(function () {

            logo.setAttribute("class", "");
            // 클래스 지우고 다시넣기 시간텀 조금 줌!
            setTimeout(function () {
                logo.setAttribute("class", "on");
            }, 10); //0.01초

        }, 8000); /// 인터발간격 8초 //////////

    }); ///// 로드구역 /////////////////////
/////////////////////////////////////
/////////////////////////////////////
