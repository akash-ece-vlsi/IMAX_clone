const music = document.getElementById("bgMusic");
        document.addEventListener("pointerdown", () => {
            music.play();
        }, { once: true });