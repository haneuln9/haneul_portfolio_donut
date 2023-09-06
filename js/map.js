var markerPosition  = new kakao.maps.LatLng(33.46119853,126.31145706);
const container = document.querySelector('#map .map_img'); //지도를 담을 영역의 DOM 레퍼런스
// const container2 = document.querySelector('#map .map2'); //지도를 담을 영역의 DOM 레퍼런스
// const container3 = document.querySelector('#map .map3'); //지도를 담을 영역의 DOM 레퍼런스
// const container4 = document.querySelector('#map .map4'); //지도를 담을 영역의 DOM 레퍼런스
// const container5 = document.querySelector('#map .map5'); //지도를 담을 영역의 DOM 레퍼런스
// const container6 = document.querySelector('#map .map6'); //지도를 담을 영역의 DOM 레퍼런스

let options1 = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.46119853,126.31145706), //지도의 중심좌표.(위도 경도 수정)
    level: 3 //지도의 레벨(확대, 축소 정도)
};
let map = new kakao.maps.Map(container, options1); //지도 생성 및 객체 리턴
var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);
console.log('--------------------')
//---------------------------------------------------------
const area = document.querySelectorAll('.map_choice > a')
const map_img = document.querySelectorAll('#map > div')
console.log(area, map_img)
for(let i of map_img){i.style.display = 'none'}
area.forEach(function(t, i, e){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of area)[i.classList.remove('active')]
        t.classList.add('active')
        for(let i of map_img){i.style.display = 'none'}
        map_img[i].style.display = "block"
    })
})