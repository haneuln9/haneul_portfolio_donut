const gnb = document.querySelectorAll('nav > ul > li')
const sub = document.querySelectorAll('.sub_box .sub')
const nav = document.querySelectorAll('nav')
const brand = document.querySelector('nav > ul > li .brand img')
const menu = document.querySelector('nav > ul > li .menu img')
const pop = document.querySelector('nav > ul > li .pop img')
const store = document.querySelector('nav > ul > li .store img')
const event = document.querySelector('nav > ul > li .event img')
console.log(gnb, sub, brand,menu, pop, store, event)
//데스크탑 서브 가리기
for(let i of sub){i.style.display = 'none'}
//모바일 
const sub_m = document.querySelectorAll(' .sub2')
const gnb_m = document.querySelector('.m_nav_open ')
const m_nav = document.querySelector('.m_nav')
const gnb_nav = document.querySelectorAll('.m_nav_open > ul > li')
const close = document.querySelector('#close')
console.log( sub_m, gnb_m, m_nav, gnb_nav, close)
console.log('-----')
//---------------------------
//모바일 서브 가리기
// for(let i of sub_m){i.style.display = 'none'}
gnb_m.style.display = 'none'
//모바일 햄버거 누르면 버튼 노출
m_nav.addEventListener('click',function(){
    gnb_m.style.display = 'block'
})
close.addEventListener('click',function(){
    gnb_m.style.display = 'none'
})
//모바일 메뉴 에서 서브 노출
for(let i of gnb_nav){
    i.addEventListener('mouseover',function(e){
        e.preventDefault()
        console.log(i.lastElementChild)
        i.lastElementChild.style.display = 'flex'
    })
    i.addEventListener('mouseout',function(e){
        e.preventDefault()
        i.lastElementChild.style.display = 'none'
    })
}
// gnb_nav.forEach(function(t,i,a){
//     t.addEventListener('click',function(e){
//         e.preventDefault()

//     })
// })


//-------------브랜드-----------------
brand.addEventListener('mouseover',function(){
    onOff(this, 'brand','on')
})
brand.addEventListener('mouseout',function(){
    onOff(this, 'brand','off')
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
