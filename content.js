console.log("EXECUTING!");

const video = document.querySelector('video');
video.muted = true;
video.playbackRate = 5;

const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button');
if (skipButton) {
    skipButton.click();
    console.log('Used Button to Skip Ad');
}