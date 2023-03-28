const video = document.querySelector("#player1");
const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const slowerBtn = document.querySelector("#slower");
const fasterBtn = document.querySelector("#faster");
const skipBtn = document.querySelector("#skip");
const slider = document.querySelector("#slider");
const volumeDisplay = document.querySelector("#volume");
const muteBtn = document.querySelector("#mute");
const vintageBtn = document.querySelector("#vintage");
const origBtn = document.querySelector("#orig");

function onWindowLoad() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
}

function onPlayClick() {
	console.log("Play Video");
	video.play();
	volumeDisplay.innerHTML = (video.volume * 100) + "%";
}

function onPauseClick() {
	console.log("Pause Video");
	video.pause();
}

function onSlowerClick() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
}

function onFasterClick() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
}

function onSkipClick() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
}

function onSliderChange() {
	console.log("The current volume is " + video.volume);
	video.volume = slider.value / 100;
	volumeDisplay.innerHTML = (video.volume * 100) + "%";
	console.log("The current volume is " + video.volume);
}

function onMuteClick() {
	console.log("The video is muted");
	if (video.muted === false) {
		video.muted = true;
		muteBtn.textContent = "Unmute";
	} else {
		video.muted = false;
		muteBtn.textContent = "Mute";
	}
}

function onVintageClick() {
	video.classList.add("oldSchool");
	console.log("The oldSchool class is added");
}

function onOrigClick() {
	video.classList.remove("oldSchool");
	console.log("The oldSchool class is removed");
}

window.addEventListener("load", onWindowLoad);
playBtn.addEventListener("click", onPlayClick);
pauseBtn.addEventListener("click", onPauseClick);
slowerBtn.addEventListener("click", onSlowerClick);
fasterBtn.addEventListener("click", onFasterClick);
skipBtn.addEventListener("click", onSkipClick);
slider.addEventListener("change", onSliderChange);
muteBtn.addEventListener("click", onMuteClick);
vintageBtn.addEventListener("click", onVintageClick);
origBtn.addEventListener("click", onOrigClick);
