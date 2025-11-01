 
const STORAGE_KEY = "meus_filmes_v1";

function loadMovies() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveMovies(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}


function createCardHTML(movie, index) {
  return `
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card movie-card">
        <img src="${movie.cover || 'https://via.placeholder.com/400x600?text=Sem+Capa'}" class="card-img-top" alt="${escapeHtml(movie.title)}">
        <div class="card-body">
          <h5 class="card-title">${escapeHtml(movie.title)}</h5>
          <p class="mb-1"><small>${movie.year || ''} • ${movie.rating || ''} • ${movie.genre || ''} • ${movie.duration || ''}</small></p>
          <p class="card-text small text-muted">${escapeHtml(movie.description || '')}</p>

          <div class="d-grid gap-2 mt-3">
            <button class="btn btn-success btn-sm watch-btn" data-index="${index}">Assistir trailer</button>
            <button class="btn btn-danger btn-sm delete-btn" data-index="${index}">Excluir filme</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMovies() {
  const list = loadMovies();
  const row = document.getElementById("cards-row");
  row.innerHTML = list.map((m, i) => createCardHTML(m, i)).join("");
  attachCardEvents(); // ligar botões depois de renderizar
}

// ===== util =====
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ===== eventos dos cards =====
function attachCardEvents() {
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.index);
      deleteMovie(idx);
    });
  });

  document.querySelectorAll(".watch-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.index);
      openTrailer(idx);
    });
  });
}


function addMovie(movie) {
  const list = loadMovies();
  list.push(movie);
  saveMovies(list);
  renderMovies();
}

function deleteMovie(idx) {
  const list = loadMovies();
  list.splice(idx, 1);
  saveMovies(list);
  renderMovies();
}

function openTrailer(idx) {
  const list = loadMovies();
  const movie = list[idx];
  if (!movie || !movie.trailer) {
    alert("Trailer não disponível.");
    return;
  }
  
  window.open(movie.trailer, "_blank");
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("movie-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const movie = {
      title: form.title.value.trim(),
      cover: form.cover.value.trim(),
      year: form.year.value.trim(),
      rating: form.rating.value,
      trailer: form.trailer.value.trim(),
      genre: form.genre.value.trim(),
      duration: form.duration.value.trim(),
      description: form.description.value.trim()
    };

    
    if (!movie.title) {
      alert("Informe o nome do filme.");
      return;
    }

    addMovie(movie);
    form.reset();
  });

  // render inicial
  renderMovies();
});
