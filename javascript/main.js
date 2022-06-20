class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

const search = document.querySelector(".search-box input"),
images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e =>{
if(e.key == "Enter"){
  let searcValue = search.value,
      value = searcValue.toLowerCase();
      images.forEach(image =>{
          if(value === image.dataset.name){ //matching value with getting attribute of images
              return image.style.display = "block";
          }
          image.style.display = "none";
   });
}
});

search.addEventListener("keyup", () =>{
if(search.value != "") return;

images.forEach(image =>{
  image.style.display = "block";
}