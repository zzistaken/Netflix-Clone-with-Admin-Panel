const form = document.getElementById("movie-form");
const titleElement = document.querySelector("#title");
const descriptionElement = document.querySelector("#description");
const urlElement = document.querySelector("#url");

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

// Loading All Events
eventListeners();