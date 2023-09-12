/* 베스트 슬라이드 */
const b_slide = new Swiper('#b_slide',{
    slidesPerView:'auto',
    spaceBetween:10,
    navigation: {//이전 다음 버튼 동작 하게 하기
        nextEl: '.b_left .swiper-button-next',
        prevEl: '.b_left .swiper-button-prev',
    },
    // breakpoints:{
    //     350:{slidesPerView:1},//700일경우 슬라이드 2개 표시
    //     // 700:{slidesPerView:2},//700일경우 슬라이드 2개 표시
    //     // 930:{slidesPerView:3},//700일경우 슬라이드 2개 표시\
    //     // 1150:{slidesPerView:2},//700일경우 슬라이드 2개 표시\
    // }
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
    ease:"power2.out",
    duration:2
})
gsap.to(s4RpTag,{
    scrollTrigger:s4Title,
    delay:0.5,
    // duration:2,
    x:0,
    ease:"power2.out",
    duration:2
})
