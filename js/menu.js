
const top_nav = document.querySelectorAll ('.top_nav > a')
const menusub = document.querySelectorAll ('.menu_sub')
// const show = document.querySelector('subshow')
console.log (top_nav, menusub)
// .menu_items .menu_sub
//
for(let i of menusub){i.style.display ='none'}
top_nav.forEach(function(t,i,e){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of top_nav)[i.classList.remove('active')]
        t.classList.add('active')
        for(let i of menusub){i.style.display = 'none'}
        menusub[i].style.display = "flex"
    })
})