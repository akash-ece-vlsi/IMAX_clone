const music = document.getElementById("bgMusic");
        document.addEventListener("mouseenter", () => {
            music.play();
        }, { once: true });