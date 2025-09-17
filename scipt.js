// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });// 🔍 Search Functionality
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    let filter = searchInput.value.toLowerCase();
    let movies = document.querySelectorAll(".movie-card");

    movies.forEach(movie => {
      let title = movie.querySelector("h3").textContent.toLowerCase();
      if (title.includes(filter)) {
        movie.style.display = "";
      } else {
        movie.style.display = "none";
      }
    });
  });
}

// 🎭 Filter Movies by Category
function filterMovies(category) {
  let movies = document.querySelectorAll(".movie-card");
  movies.forEach(movie => {
    if (category === "all" || movie.dataset.category === category) {
      movie.style.display = "";
    } else {
      movie.style.display = "none";
    }
  });
}

}
