const form = document.getElementById("movie-form");
const titleElement = document.querySelector("#title");
const descriptionElement = document.querySelector("#description");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-movies");

// Starting UI Object
const ui = new UI();

// Create Storage Object
const storage = new Storage();

const eventListeners = () => {
    form.addEventListener("submit",addMovie);
    document.addEventListener("DOMContentLoaded",function(){
        let movies = storage.getMoviesFromStorage();
        ui.loadAllMovies(movies);
    });
    
    cardBody.addEventListener("click",deleteMovie);
    clear.addEventListener("click",clearAllMovies);
}

const addMovie = (e) => {
    const title = titleElement.value;
    const description = descriptionElement.value;
    const url = urlElement.value;

    if(title === "" || description === "" || url === ""){
        // Error
        ui.displayMessages("Lütfen tüm alanları doldurun.","danger");
    }
    else {
        // Create New Movie
        const newMovie = new Movie(title,description,url);

        ui.addMovieToUI(newMovie); // Adding Movie to UI

        storage.addMovieToStorage(newMovie); // Adding Movie to Storage

        ui.displayMessages("Film başarıyla eklendi.","success");
    }

    ui.clearInputs(titleElement,descriptionElement,urlElement);

    e.preventDefault();
}

function deleteMovie(e){
    if (e.target.id === "delete-movie"){
        ui.deleteMovieFromUI(e.target);
        storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Film başarıyla silindi.","success");
    }
}

function clearAllMovies(){
    if (confirm("Tüm filmleri temizlemek istediğinize emin misiniz?")){
        ui.clearAllMoviesFromUI();
        storage.clearAllMoviesFromStorage();
    }
    
}

// Loading All Events
eventListeners();