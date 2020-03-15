const navPopup = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav_link");

    burger.addEventListener("click", () => {
        nav.classList.toggle('myNav-active');
    });
}

navPopup();