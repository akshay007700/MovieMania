// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Filter movies
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
