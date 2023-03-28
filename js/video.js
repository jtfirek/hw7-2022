var video = document.querySelector("#player1");

window.addEventListener("load", function() {
video.autoplay = false;
video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
var vid = document.querySelector("#player1");
document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
vid.play();
});

document.querySelector("#pause").addEventListener("click", function() {
video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
video.playbackRate *= 0.9;
});

document.querySelector("#faster").addEventListener("click", function() {
video.playbackRate /= 0.9;
});

document.querySelector("#skip").addEventListener("click", function() {
video.currentTime += 10;
if (video.currentTime >= video.duration) {
video.currentTime = 0
}
});

document.querySelector("#mute").addEventListener("click", function() {
if (video.muted == false) {
video.muted = true;
this.innerHTML = "Unmute"
} else {
video.muted = false
this.innerHTML = "Mute"
}
});

document.querySelector("#slider").addEventListener("input", function () {
video.volume = (this.value / 100);
document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
document.querySelector("#player1").classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
document.querySelector("#player1").classList.remove("oldSchool")
})