const articles = document.querySelectorAll("article");
const windowMetade = window.innerHeight * 0.6;
console.log(articles);
function animaScroll() {
  articles.forEach((article) => {
    const articleTop = article.getBoundingClientRect().top;
    const isSectionVisible = articleTop - windowMetade < 0;
    if (isSectionVisible) {
      article.classList.add("ativar");
    } else {
      article.classList.remove("ativar");
    }
  });
}
animaScroll();
addEventListener("scroll", animaScroll);

const dd = document.querySelectorAll("dd");
const dt = document.querySelectorAll("dt");
dt[0].nextElementSibling.classList.add("ativo");
dt.forEach((dt) => {
  dt.addEventListener("click", function (e) {
    console.log(e);

    dt.nextElementSibling.classList.toggle("ativo");
  });
});
