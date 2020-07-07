// My Item PJ 메인페이지 JS - main.js


///// 로드구역 ///////////////////////////////
window.addEventListener("DOMContentLoaded",
    function () {
        console.log("메인JS 로딩완료!");

        /*////////////////////////////////////////
            함수명:setLink
            기능: 메인 썸네일 이미지를 클릭하면 페이지이동
        */ ////////////////////////////////////////
        var setLink = function () {
            //console.log("메인셋팅함수");
            // 익명함수를 셋팅 후 리턴함!
            return function () {
                // 이미지의 alt 값을 가져오기
                // this 는 클릭된 이미지자신
                // getAttribute(속성명) - 속성값가져옴
                var ialt = this.getAttribute("alt");
                console.log("alt값:"+ialt);
                // 아이템 페이지 파라미터 번호주기
                var seq;//순번
                switch(ialt){
                    case "아이폰6플러스": seq=1; break;    
                    case "맥북에어": seq=3; break;    
                    case "구두": seq=6; break;    
                    case "시계": seq=5; break;    
                    case "가방": seq=4; break;    
                } // switch case문 //////////////
                
                /// 페이지이동하기 ////
                location.href = "item.html?pno="+seq;
                
                
                
                
            }; ///// return ////////////

        } ///////////// setLink 함수 //////////////
        //////////////////////////////////////////
        //////////////////////////////////////////




        //// 메인 썸네일 링크 클릭시 페이지 이동하기 ///
        // 이벤트대상: .thumbs img
        // 이벤트종류: click
        // 변수 tbs : 썸네일이미지
        var tbs = document.querySelectorAll(".thumbs img");
        //console.log("썸네일개수:"+tbs.length);
        // for문으로 개수만큼 링크설정!
        for (var i = 0; i < tbs.length; i++) {
            tbs[i].onclick = setLink();
        } ////// for문 ////////////////






    }); //////////// 로드구역 //////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
