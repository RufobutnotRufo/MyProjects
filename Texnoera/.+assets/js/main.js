const tabs = document.querySelectorAll('[data-role="tab"]'),
  tabContents = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("is-active");
    });
    target.classList.add("is-active");

    tabs.forEach((t) => {
      t.classList.remove("is-active");
    });
    tab.classList.add("is-active");
  });
});

const boxList = document.querySelectorAll(".card-services a");

boxList.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    for (let i = 0; i < tabs.length; i++) {
      if (e.target.innerText === tabs[i].innerText) {
        tabs[i].classList.add("is-active");
      }
    }
  });
});

const klik = document.querySelector("#subMenu");

klik.addEventListener("click", () => {
  const menu = document.querySelector(".altMenu");
  const head = document.querySelector(".header");
  if (head.style.display === "none" && menu.style.display === "block") {
    head.style.display = "block";
    menu.style.display = "none";
    document.body.style.overflow = "auto";
  } else {
    head.style.display = "none";
    menu.style.display = "block";
    document.body.style.overflow = "hidden";
  }
});

const close = document.querySelector("#close");

close.addEventListener("click", () => {
  const menu = document.querySelector(".altMenu");
  const head = document.querySelector(".header");
  if (menu.style.display === "none" && head.style.display === "block") {
    menu.style.display = "block";
    head.style.display = "none";
    document.body.style.overflow = "hidden";
  } else {
    menu.style.display = "none";
    head.style.display = "block";
    document.body.style.overflow = "auto";
  }
});

const more = document.querySelector("#more");

more.addEventListener("click", () => {
  const detail = document.querySelector(".service-content");
  if (detail.style.display === "none") {
    more.innerHTML = "Daha az";
    detail.style.display = "block";
  } else {
    detail.style.display = "none";
    more.innerHTML = "Daha çox";
  }
});

const navbarLinks = document.getElementsByClassName("altMenu")[0];
const links = navbarLinks.querySelectorAll("a");
const header = document.querySelector(".header");

for (let link of links) {
  link.addEventListener("click", () => {
    navbarLinks.style.display = "none";
    if ((navbarLinks.style.display = "none")) {
      header.style.display = "block";
      document.body.style.overflow = "auto";
    }
  });
}

