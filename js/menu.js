
const top_nav = document.querySelectorAll ('.top_nav > a')
const sub = document.querySelectorAll ('.sub')
const show = document.querySelector('subshow')
console.log (top_nav, sub)

//
for(let i of sub){i.style.display ='none'}
top_nav.forEach(function(t,i,e){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of top_nav)[i.classList.remove('active')]
        t.classList.add('active')
        for(let i of sub){i.style.display = 'none'}
        sub[i].style.display = "flex"
    })
})