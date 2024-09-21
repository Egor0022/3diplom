
const video = document.getElementById('video');
const playButton = document.querySelector('.video-btn');


playButton.addEventListener('click', () => {
  
if (video.paused) {
    video.play();
    playButton.textContent = 'pause';
}
else {
    video.pause()
    playButton.textContent = 'play';
}
})