


// const ali = document.querySelector(".muna")
// const muno = document.querySelector("#muna")
// const btn = document.querySelector("button")

// muno.innerHTML = "this is muna"

// muna.style.backgroundColor ="red"

// ali.style.backgroundColor ="green"

// btn.addEventListener("click",function(){
//     ali.style.backgroundColor = "yellow"
// })


const box = document.querySelector(".light")
const on = document.querySelector(".on")
const off = document.querySelector(".off")

on.addEventListener("click",function(){
    box.style.backgroundColor = "yellow"
})
off.addEventListener("click",function(){
    box.style.backgroundColor = "transparent"
})