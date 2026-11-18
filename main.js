
var letterContent = "Chúc bé Ngọc 19/11 luôn vui vẻ, mạnh khỏe, học hành thuận lợi và làm gì cũng suôn sẻ. Mong em sẽ ngày càng trưởng thành hơn, bớt dỗi lại một xíu và vẫn luôn giữ được sự đáng yêu của mình. Cảm ơn em vì đã luôn yêu chị, dù đôi khi cũng hơi báo chị đấy =))). Chúc chàng trai nhỏ của chị có một ngày thật vui, luôn tự tin và làm được những điều mình mong muốn nhé. Yêu em!!"

durationWrite = 50 
function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardBoyDay").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardBoyDay = document.querySelector(".cardBoyDay")

cardBoyDay.addEventListener("click", () => {
    cardBoyDay.classList.toggle("open")

    if(cardBoyDay.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})