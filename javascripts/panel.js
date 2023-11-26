const form = document.getElementById("movie-form");
const titleElement = document.querySelector("#title");
const descriptionElement = document.querySelector("#description");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-movies");

const eventListeners = () => {
    form.addEventListener("submit",addMovie);
    document.addEventListener("DOMContentLoaded",function(){
        let movies = Storage.getMoviesFromStorage();
        UI.loadAllMovies(movies);
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
        UI.displayMessages("Lütfen tüm alanları doldurun.","danger");
    }
    else {
        // Create New Movie
        const newMovie = new Movie(title,description,url);
        UI.addMovieToUI(newMovie); // Adding Movie to UI
        Storage.addMovieToStorage(newMovie); // Adding Movie to Storage
        UI.displayMessages("Film başarıyla eklendi.","success");
    }
    UI.clearInputs(titleElement,descriptionElement,urlElement);
    e.preventDefault();
}
function deleteMovie(e){
    if (e.target.id === "delete-movie"){
        UI.deleteMovieFromUI(e.target);
        Storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Film başarıyla silindi.","success");
    }
}
function clearAllMovies(){
    if (confirm("Tüm filmleri temizlemek istediğinize emin misiniz?")){
        UI.clearAllMoviesFromUI();
        Storage.clearAllMoviesFromStorage();
    } 
}
// Loading All Events
eventListeners();