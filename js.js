window.addEventListener("keydown",function(event){
    const audioEl=document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const keyl=document.querySelector(`.key[data-key="${event.keyCode}"]`)

if(!audioEl){
    return
}

audioEl.currentTime=0
audioEl.play()
keyl.classList.add("active")
setTimeout(()=>{ 
    keyl.classList.remove("active")
},1000)
}
)
window.addEventListener("keydown",function(event){
    const audioEl=document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const keyl=document.querySelector(`.key[data-key="${event.keyCode}"]`)
 
})
