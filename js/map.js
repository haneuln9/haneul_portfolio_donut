var markerPosition  = new kakao.maps.LatLng(33.4611909, 126.3116327);
const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
let options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.4611909, 126.3116327), //지도의 중심좌표.(위도 경도)
    level: 3 //지도의 레벨(확대, 축소 정도)
};
let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);
console.log('--------------------------------')

//---------------------------------------------------------
const area = document.querySelectorAll('.map_choice > a')
const mapContent = document.querySelectorAll('.map_sub > p')
// const map_img = document.querySelectorAll('#map > div')
console.log(area, mapContent)
// for(let i of map_img){i.style.display = 'none'}
area.forEach(function(t, i, e){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of area)[i.classList.remove('active')]
        t.classList.add('active')
        for(let i of mapContent)[i.style.display='none']
        mapContent[i].style.display = 'block'
        // for(let i of map_img){i.style.display = 'none'}
        // map_img[i].style.display = "block"
    })
})