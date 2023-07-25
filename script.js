const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgb(0, 153, 255,0.5),rgb(255, 255, 255,0.5)),url('https://c4.wallpaperflare.com/wallpaper/18/776/964/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "I'm Gonna Be"
    }, 500)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgb(255, 204, 255,0.5),rgb(255, 255, 255,0.5)),url('https://c4.wallpaperflare.com/wallpaper/18/776/964/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "The king of the pirates"
    }, 1000)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgb(255, 148, 77),rgb(255, 255, 255,03,0.5)),url('https://c4.wallpaperflare.com/wallpaper/18/776/964/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "and I'll find"
    }, 1500)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgb(51, 255, 119),rgb(255, 255, 255,03,0.5)),url('https://c4.wallpaperflare.com/wallpaper/18/776/964/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "The One piece"
    }, 2000)
}

setInterval(changeText, 2500)