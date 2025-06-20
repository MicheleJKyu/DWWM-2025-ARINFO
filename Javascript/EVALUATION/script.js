// tableau des livres
let books = [];

// sauvegarde dans le localStorage
function saveBooks() {
  localStorage.setItem("myLibrary", JSON.stringify(books));
}

// chargement des livres depuis le localStorage
function loadBooks() {
  const storedBooks = localStorage.getItem("myLibrary");
  if (storedBooks) {
    try {
      books = JSON.parse(storedBooks);
    } catch (error) {
      console.error("erreur de chargement :", error);
      books = [];
      localStorage.removeItem("myLibrary");
    }
  }
}

// ajout d’un livre par l'utilisateur
async function addBook() {
  const title = document.getElementById("bookTitle").value.trim();
  const author = document.getElementById("bookAuthor").value.trim();
  const genre = document.getElementById("bookGenre")?.value.trim() || "non défini";

  // vérification des champs
  if (title === "" || author === "") {
    showError("veuillez remplir tous les champs.");
    return;
  }

  // doublon interdit (titre + auteur)
  const alreadyExists = books.some(
    (book) =>
      book.title.toLowerCase() === title.toLowerCase() &&
      book.author.toLowerCase() === author.toLowerCase()
  );

  if (alreadyExists) {
    showError("ce livre est déjà présent dans votre bibliothèque.");
    return;
  }

  // réinitialisation des champs
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";

  // tentative de récupération de l'année de publication
  let publishYear = null;
  try {
    const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}`);
    const data = await response.json();
    if (data.docs && data.docs.length > 0 && data.docs[0].first_publish_year) {
      publishYear = data.docs[0].first_publish_year;
    }
  } catch (e) {
    console.warn("date de publication non récupérée");
  }

  // création de l'objet livre
  const newBook = {
    title,
    author,
    genre,
    read: false,
    createdYear: publishYear || null
  };

  // ajout + mise à jour
  books.push(newBook);
  saveBooks();
  displayBooks();
}

// message d’erreur temporaire
function showError(message) {
  const errorDiv = document.getElementById("errorMessage");
  errorDiv.textContent = message;
  errorDiv.classList.add("show");
  errorDiv.style.display = "block";
  errorDiv.classList.add("text-danger");

  setTimeout(() => {
    errorDiv.classList.add("hide");
    setTimeout(() => {
      errorDiv.classList.remove("show", "hide");
      errorDiv.style.display = "none";
    }, 500);
  }, 15000);
}

// affichage visuel des livres
function displayBooks(filteredList = books) {
  const bookList = document.getElementById("bookList");
  bookList.classList.add("book-grid");
  bookList.innerHTML = "";

  // filtrage par genre
  const selectedGenre = document.getElementById("genreFilter")?.value || "all";
  if (selectedGenre !== "all") {
    filteredList = filteredList.filter((book) => book.genre === selectedGenre);
  }

  // tri des livres
  const sortValue = document.getElementById("sortFilter")?.value || "none";
  if (sortValue === "titleAZ") {
    filteredList.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "titleZA") {
    filteredList.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortValue === "authorAZ") {
    filteredList.sort((a, b) => a.author.localeCompare(b.author));
  } else if (sortValue === "authorZA") {
    filteredList.sort((a, b) => b.author.localeCompare(a.author));
  } else if (sortValue === "yearAsc") {
    filteredList.sort((a, b) => (a.createdYear || 9999) - (b.createdYear || 9999));
  } else if (sortValue === "yearDesc") {
    filteredList.sort((a, b) => (b.createdYear || 0) - (a.createdYear || 0));
  }

  // affichage de chaque livre avec une boucle
  filteredList.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.className = "book-card";

    const img = document.createElement("img");
    img.src = `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-M.jpg`;
    img.alt = `couverture de ${book.title}`;
    img.style.marginBottom = "0.5rem";
    img.style.maxHeight = "200px";
    img.style.objectFit = "cover";
    img.onerror = () => (img.style.display = "none");
    bookItem.appendChild(img);

    const bookText = document.createElement("p");
    bookText.innerHTML = `<strong>${book.title}</strong><br><small>${book.author}</small>`;
    bookItem.appendChild(bookText);

    const toggleButton = document.createElement("button");
    toggleButton.className = book.read
      ? "btn btn-success btn-sm mt-2"
      : "btn btn-danger btn-sm mt-2";
    toggleButton.innerHTML = book.read
      ? '<i class="bi bi-check-circle-fill"></i> lu'
      : '<i class="bi bi-book"></i> non lu';

    toggleButton.addEventListener("click", () => {
      book.read = !book.read;
      saveBooks();
      displayBooks();
    });
    bookItem.appendChild(toggleButton);

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "bi bi-trash text-danger";
    deleteIcon.style.marginLeft = "10px";
    deleteIcon.style.cursor = "pointer";
    deleteIcon.addEventListener("click", () => {
      books.splice(books.indexOf(book), 1);
      saveBooks();
      displayBooks();
    });
    bookItem.appendChild(deleteIcon);

    bookList.appendChild(bookItem);
  });

  // mise à jour des compteurs
  document.getElementById("bookCount").textContent = `${books.length} livre(s)`;

  const emptyMessage = document.getElementById("emptyMessage");
  if (emptyMessage) {
    emptyMessage.style.display = filteredList.length === 0 ? "block" : "none";
  }

  const readCount = filteredList.filter(book => book.read).length;
  const unreadCount = filteredList.length - readCount;
  document.getElementById("readStats").textContent = `${readCount} lu · ${unreadCount} non lu`;
}

// exécution au chargement
document.addEventListener("DOMContentLoaded", () => {
  // initialisation
  loadBooks();
  displayBooks();

  // recherche dynamique
  document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
  });

  // soumission du formulaire
  document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  // filtre genre
  const genreFilter = document.getElementById("genreFilter");
  if (genreFilter) {
    genreFilter.addEventListener("change", () => {
      displayBooks();
    });
  }

  // filtre de tri
  const sortFilter = document.getElementById("sortFilter");
  if (sortFilter) {
    sortFilter.addEventListener("change", () => {
      displayBooks();
    });
  }
});
