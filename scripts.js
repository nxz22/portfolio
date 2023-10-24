// index.html's Hidden Content (Scroll to Discover More)
window.addEventListener("scroll", function() {
    let hiddenContent = document.querySelector(".hidden-content");
    let scrollPrompt = document.querySelector(".scroll-prompt");

    if (window.pageYOffset > 200) { 
        hiddenContent.style.opacity = "1";
        hiddenContent.style.transform = "translateY(0)";

        scrollPrompt.style.opacity = "0";
        scrollPrompt.style.transition = "opacity 0.5s";
    }
}); 

//Fade in/out Transition
window.addEventListener("load", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach(function (element) {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
    });

    const fadeDownElements = document.querySelectorAll(".fade-down");
    fadeDownElements.forEach(function (element) {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
    });
});


//Music Player Play/Pause
window.addEventListener("load", function () {
    const musicTitle = document.querySelector('.music-title');
    const cdElement = document.getElementById('cdElement');
    const musicBar = document.getElementById('musicBar');
    const rotatingImage = cdElement.querySelector('img.rotating');
    const sourceElement = musicBar.querySelector('source');

    let isPlaying = localStorage.getItem('isPlaying') === 'true';
    let lastTime = parseFloat(localStorage.getItem('lastTime')) || 0;
    let lastSrc = localStorage.getItem('lastSrc');

    // Update the UI based on the stored state
    if (isPlaying) {
        musicBar.play(); 
        rotatingImage.style.animationPlayState = 'running'; 
        musicTitle.style.opacity = '0.5';
    } else {
        musicBar.pause(); 
        rotatingImage.style.animationPlayState = 'paused';
        musicTitle.style.opacity = '0';
    }

    // Set the time and src if it matches
    if (lastSrc === sourceElement.src) {
        musicBar.currentTime = lastTime;
    }

    cdElement.addEventListener('click', function() {
        if (isPlaying) {
            musicBar.pause(); 
            rotatingImage.style.animationPlayState = 'paused'; 
            musicTitle.style.opacity = '0';
        } else {
            musicBar.play(); 
            rotatingImage.style.animationPlayState = 'running'; 
            musicTitle.style.opacity = '0.5';
        }
        isPlaying = !isPlaying; 
        localStorage.setItem('isPlaying', isPlaying);
    });

    window.addEventListener('beforeunload', function() {
        localStorage.setItem('lastTime', musicBar.currentTime);
        localStorage.setItem('lastSrc', sourceElement.src);
    });
});
