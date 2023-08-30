const gnb = document.querySelectorAll('nav > ul > li')
// const sub = document.querySelectorAll('nav .sub_box .sub')
const sub = document.querySelectorAll('.sub_box .sub')
const nav = document.querySelectorAll('nav')
const brand = document.querySelector('nav > ul > li .brand img')
const menu = document.querySelector('nav > ul > li .menu img')
const pop = document.querySelector('nav > ul > li .pop img')
const store = document.querySelector('nav > ul > li .store img')
const event = document.querySelector('nav > ul > li .event img')
console.log(gnb, sub, brand,menu, pop, store, event)
//---------------------------
for(let i of sub){i.style.display = 'none'}
let if_img = false
//-------------브랜드-----------------
brand.addEventListener('mouseover',function(){
    onOff(this, 'brand','on')
})
brand.addEventListener('mouseout',function(){
    onOff(this, 'brand','off')
})
brand.addEventListener('click',function(e){
    if(if_img == false){
        brand.src = './images/nav/brand_on.png'
        if_img = true
    }else{
        brand.src = './images/nav/brand_off.png'
        if_img = false
    }
})

//-----------------메뉴--------------------------
menu.addEventListener('mouseover',function(e){
    onOff(this, 'menu','on')
})
menu.addEventListener('mouseout',function(e){
    onOff(this, 'menu','off')
})
//------------------팝-------------------------
pop.addEventListener('mouseover',function(e){
    onOff(this, 'pop','on')
})
pop.addEventListener('mouseout',function(e){
    onOff(this, 'pop','off')
})
//-------------------스토어------------------------
store.addEventListener('mouseover',function(e){
    onOff(this, 'store','on')
})
store.addEventListener('mouseout',function(e){
    onOff(this, 'store','off')
})
//-------------------이벤트------------------------
event.addEventListener('mouseover',function(e){
    onOff(this, 'event','on')
})
event.addEventListener('mouseout',function(e){
    onOff(this, 'event','off')
})
//-------------------------------------------
function onOff(target, name, status){
    return target.src=`./images/nav/${name}_${status}.png`
    
}
//----------------------------------------
for(let i of gnb){
    i.addEventListener('mouseover',function(e){
        e.preventDefault()
        for(let j of sub){
            j.style.display = 'flex'
        }
    })
    i.addEventListener('mouseout',function(e){
        e.preventDefault()
        for(let j of sub){
            j.style.display = 'none'
        }
    })
}

/* 베스트 슬라이드 */
const b_slide = new Swiper('#b_slide',{
    slidesPerView:'auto',
    spaceBetween:10,
    navigation: {//이전 다음 버튼 동작 하게 하기
        nextEl: '.b_left .swiper-button-next',
        prevEl: '.b_left .swiper-button-prev',
    },
});
/*프리미엄 슬라이드 */
const p_slide = new Swiper('#p_slide',{
    slidesPerView: "auto",
    spaceBetween:10,
    navigation: {//이전 다음 버튼 동작 하게 하기
        nextEl: '.p_right .swiper-button-next',
        prevEl: '.p_right .swiper-button-prev',
    }
});
//스크롤 내릴시 애니메이션 적용
const s1Txt = document.querySelector ('.s1_txt')
const s2Txt = document.querySelector ('.s2_txt')
const s1Title = document.querySelector('.s1')
const s2Title = document.querySelector('.s2')
const s4Left = document.querySelector('.s_left .s4_txtl')
const s4Right = document.querySelector('.s_right .s4_txtr')
const s4Title = document.querySelector('.s4')
const s4RpTag = document.querySelector('.s4_txtr > p')
const s4LpTag = document.querySelector('.s4_txtl > p')
console.log(s2Txt, s1Txt, s1Title, s4Left, s4Right, s4Title,s4LpTag, s4RpTag)
gsap.to(s1Txt,{
    scrollTrigger:s1Title,
    // delay:0.5,
    x:0,
    ease:"power2.out",
    duration:2
})
gsap.to(s2Txt,{
    scrollTrigger:s2Title,
    delay:0.5,
    duration:2,
    x:0,
    ease:"power2.out"
})
gsap.from(s4Left,{
    scrollTrigger:s4Title,
    delay:0.5,
    opacity:0,
    ease:"power2.out"
})
gsap.from(s4Right,{
    scrollTrigger:s4Title,
    delay:0.5,
    opacity:0,
    ease:"power2.out"
})
gsap.to(s4LpTag,{
    scrollTrigger:s4Title,
    delay:0.5,
    // duration:2,
    x:0,
    ease:"power2.out"
})
gsap.to(s4RpTag,{
    scrollTrigger:s4Title,
    delay:0.5,
    // duration:2,
    x:0,
    ease:"power2.out"
})
