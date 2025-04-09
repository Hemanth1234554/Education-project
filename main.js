document.addEventListener("scroll" , () => {
    document.querySelector("nav").classList.toggle('window__scroll' , scrollY>0)
})

const faqs=document.querySelectorAll('.faq')

faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle('open')

        const icon=faq.querySelector('.faq__icon i');
        if(icon.className==='fa-solid fa-plus'){
            icon.className='fa-solid fa-minus'
        }else{
            icon.className='fa-solid fa-plus'
        }
    })
})

const menu=document.querySelector(".nav__menu");
const open=document.querySelector("#open_menu_btn");
const close=document.querySelector("#close_menu_btn");

open.addEventListener('click',()=>{
    menu.style.display="flex";
    close.style.display="inline-block";
    open.style.display="none";
})

close.addEventListener('click',()=>{
    menu.style.display="none";
    open.style.display="inline-block";
    close.style.display="none";
})


