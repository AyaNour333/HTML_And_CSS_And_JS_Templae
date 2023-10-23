
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime()


let counter = setInterval(()=>{
    let dateNow = new Date().getTime()
    let dateDiff = countDownDate - dateNow
    // let days = Math.floor(dateDiff/1000/60/60/24)
    let days = Math.floor(dateDiff / (1000*60*60*24))
    let hours = Math.floor((dateDiff % (1000*60*60*24)) / (1000 *60 *60))
    let minutes = Math.floor((dateDiff % (1000*60*60)) / (1000 *60 ))
    let seconds = Math.floor((dateDiff % (1000*60)) / 1000 )
    document.querySelector(".days").innerHTML = days < 10 ? `00${days}`: days
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`: hours
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds
    if(dateDiff < 0){
        clearInterval(counter)
    }
},1000)





let section = document.querySelector(".our-skills")
let span = document.querySelectorAll(".progress span")

window.onscroll = function(){
    // could window.scrollY >= section.offsetTop - 100 (before reached with 100)
    if(window.scrollY >= section.offsetTop -250){
        span.forEach((span)=>{
            span.style.width = span.dataset.width
        })
    }
}

