const counter=document.getElementById("count")

const btn=document.querySelectorAll(".btn")

let count=0;

btn.forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        const style=e.currentTarget.classList
        if(style.contains("increse")){
            count++
        }else if(style.contains("decrese")){
            count>0?count--:0
        }else if(style.contains("reset")){
            count=0
        }
        counter.textContent=count
    })
})