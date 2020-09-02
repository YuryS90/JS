document.getElementById("msg").addEventListener("keyup", function () {
    event.target.value = event.target.value
        .replace(/:\)|:-\)/g, "🙂")
        .replace(/:\(|:-\)/g, "😥")
        .replace(/ЖЫВЕ БЕЛАРУСЬ|жыве беларусь/g, "🤍❤️🤍")
        .replace(/красное сердце/g, "❤️")
        .replace(/белое сердце/g, "🤍")
        .replace(/дурак|негодяй/g, "🤐");
});
