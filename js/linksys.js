// My Item PJ  링크설정 JS - linksys.js

///// 로드구역 ///////////////////
window.addEventListener("DOMContentLoaded",
    function () {
        console.log("linksys 로딩완료!");

        /*////////////////////////////////////////
            함수명:setLink
            기능: a요소를 구분하여 각각의 링크를 셋팅함
        */ ////////////////////////////////////////
        var setLink = function () {
            //console.log("링크셋팅!");
            // 익명함수를 리턴한다!
            return function () {
                // a요소 내부의 데이터읽기
                // this - 나자신(클릭된 a요소)
                // innerText - 내부 데이터
                var nm = this.innerText;

                // 예외처리: sns는 span자식에 글자가 있음!
                if (nm === "") { //구조가 다르므로 추가코딩!
                    nm = this.querySelector("span")
                        .innerText;
                } //////////// if /////////////////

                console.log("메뉴:" + nm);
                //// 메뉴별 링크설정 //////////////
                var url; //이동주소
                switch (nm) {
                    case "Home":
                        url = "index.html";
                        break;
                    case "디바이스":
                        url = "item.html?pno=1";
                        break;
                    case "스마트폰":
                        url = "item.html?pno=1";
                        break;
                    case "태블릿PC":
                        url = "item.html?pno=2";
                        break;
                    case "노트북":
                        url = "item.html?pno=3";
                        break;
                    case "패션":
                        url = "item.html?pno=4";
                        break;
                    case "가방":
                        url = "item.html?pno=4";
                        break;
                    case "시계":
                        url = "item.html?pno=5";
                        break;
                    case "구두":
                        url = "item.html?pno=6";
                        break;
                    case "프로필":
                        url = "profile.html";
                        break;
                    case "회원가입":
                        url = "member.html";
                        break;
                    case "로그인":
                        url = "login.html";
                        break;
                    case "게시판":
                        url = "board.html";
                        break;
                    case "오시는길":
                        url = "location.html";
                        break;
                    case "트위터":
                        url = "https://twitter.com/tomhanks";
                        break;
                    case "인스타그램":
                        url = "https://www.instagram.com/tomhanks/";
                        break;
                    case "페이스북":
                        url = "https://www.facebook.com/TomHanks";
                        break;
                } ///// switch case문 ///////////
                
                console.log("셋팅url:"+url);
                
                /// 셋팅된 url로 이동하기 ///
                // sns는 별창으로 띄우기
                if(nm==="트위터"||nm==="인스타그램"||nm==="페이스북"){
                    //window.open() 은 별창띄우기
                    window.open().location.href = url;
                } //// if ////////////////////////
                else{ // sns 이외엔 모두 자신창에서 이동
                    location.href = url;
                } //// else /////////////////////
                
                

            }; ///// return //////////////

        } ///////////// setLink 함수 //////////////
        //////////////////////////////////////////
        //////////////////////////////////////////


        // url주소의 종류:
        // 1. 절대주소: 도메인부터 기술하는 주소
        // 예) http://www.naver.com/index.html
        // 2. 상대주소: 현재보고 있는 파일을 기준으로 
        //    기술하는 주소
        // 예) subpage.html 
        //  -> 현재페이지와 같은위치
        // 예) ../sub/index.html
        //  -> 현재페이지 상위로 올라가서 sub폴더 하위
        // 예) sub/index.html
        //  -> 현재페이지에 있는 sub폴더 하위
        // 3. 절대상대주소 : 사이트의 루트폴더부터 
        //   기술하는 주소(루트는 슬래쉬(/)로 표현)
        // 예) /sub/index.html
        //  -> 최상위 폴더 바로 아래 sub폴더 하위


        //// 상단메뉴 공통 링크 설정 /////
        /// 대상: #top a (상단영역의 모든 a요소)
        /// 이벤트종류: click
        /// 대상의 개수만큼 for문으로 셋팅함!
        var link = document.querySelectorAll("#top a");
        //console.log("메뉴개수:"+link.length);
        for (var i = 0; i < link.length; i++) {
            link[i].onclick = setLink();
        } ///// for문 ////////////////////////////
    
    
    ///// 로고 클릭시 메인페이지 이동설정하기 /////
    var logo = document.querySelector("#logo");
    logo.style.cursor = "pointer";//손가락모양
    logo.onclick = function(){
        location.href = "index.html";
    };//////// click 함수 /////////////////////
    





    }); //////////// 로드구역 //////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
