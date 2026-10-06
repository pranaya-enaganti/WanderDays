const intro = document.getElementById("intro");
const exploreButton = document.getElementById("exploreButton");
const skipButton = document.getElementById("skipButton");
const mainWebsite = document.getElementById("mainWebsite");

function enterWebsite() {
    intro.classList.add("hide-intro");

    setTimeout(() => {
        window.scrollTo({
            top: mainWebsite.offsetTop,
            behavior: "smooth"
        });
    }, 700);
}

exploreButton.addEventListener("click", enterWebsite);

skipButton.addEventListener("click", enterWebsite);