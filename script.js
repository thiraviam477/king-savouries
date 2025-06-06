function exploreProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
const toggle = document.querySelector('.menu-toggle');
const sidePane = document.getElementById('sidePane');

toggle.addEventListener('click', () => {
  sidePane.classList.toggle('show');
});
document.addEventListener('click', function (e) {
  if (!sidePane.contains(e.target) && !toggle.contains(e.target)) {
    sidePane.classList.remove('show');
  }
});