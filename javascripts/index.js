class Movie {
    constructor(title, description, url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }
}
class indexUI {
    static loadAllMovies(movies) {
        const movieList = document.getElementById("movieList");
        movies.forEach(movie => {
            movieList.innerHTML += `
                <div class="filmBox">
                    <img src="${movie.url}" alt="Banner" id="filmBanner">
                    <div class="filmInfo">
                        <h1 id="filmName">${movie.title}</h1>
                        <p id="filmDescription">${movie.description}</p>
                        <button class="btn-watch2"><i class="fa-solid fa-circle-play fa-lg"></i> İzle</button>
                    </div>
                    <div class="logoInBanner">
                        <img src="/images/N-Logo.png" alt="N_Logo">
                    </div>
                </div>
            `;
        });
    }
    static getMoviesFromStorage() {
        let movies;
        if (localStorage.getItem("movies") === null) {
            movies = [];
        } else {
            movies = JSON.parse(localStorage.getItem("movies"));
        }
        return movies;
    }
    static goPanel = () => {
        const newPageUrl = "panel.html";
        window.location.href = newPageUrl;
    }
    static goLogin = () => {
        const newPageUrl = "login.html";
        window.location.href = newPageUrl;
    }

    static handleScroll = () => {
        const navbar = document.querySelector(".navbar");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                navbar.style.background = "linear-gradient(180deg, rgba(0,0,0,1) 25%, rgba(14,14,14,0.8) 100%)";
            } else {
                navbar.style.background = "none";
            }
        });
    }
}

const eventListeners = () => {
    document.addEventListener("DOMContentLoaded", function () {
        let movies = indexUI.getMoviesFromStorage();
        indexUI.loadAllMovies(movies);
        indexUI.handleScroll(); // Scroll olayını dinlemek için bu fonksiyonu çağırın
        const panelButton = document.getElementById("button-panel");
        panelButton.addEventListener("click", indexUI.goPanel);
        const logoutButton = document.getElementById("button-logout");
        logoutButton.addEventListener("click", indexUI.goLogin);
    });
};

window.onload = () => {
    if (!localStorage.getItem('movies')) {
        const movies = [
            {
                title: "Oppenheimer",
                description: "Atom bombasının icadı ve kullanılması, dünyayı değiştiren bir dönüm noktası olmuştur. Bu olay, bilimin gücünün yanı sıra insanın vicdani sorumluluğunu ve etik değerlerini de sorgulamamıza neden olmuştur.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-oppenheimer-izle.webp"
            },
            {
                title: "Extraction 2",
                description: "Bangladeş'in, Dhaka kentindeki tehlikeli bir görevden mucizevi bir şekilde sağ kurtulan Tyler Rake, güvendiği ekibiyle birlikte bir sonraki görevlerine hazır olarak geri döndü.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/extraction-2-izle-3-52777.webp"
            },
            {
                title: "Galaksinin Koruyucuları",
                description: "Ufak yaşlarda annesini hastalıktan dolayı kaybeden bir çocuk uzaylılar tarafından dünyadan kaçırılır ve kendi amaçları için eğitilir sonunda hırsız olan bu çocuk bir küre çalar başını oldukça belaya sokar yeni arkadaşlar edinir.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/galaksinin-koruyuculari-izle-66874.webp"
            },
            {
                title: "Örümcek Adam Örümcek Evreninde",
                description: "İdealleri olan bir polis memurunun oğlu olan Miles Morales okulda özel yeteneklerini olan bir okula ailesi tarafından yazdırılacak fakat diğer arkadaşları gibi hiçbir özel yeteneği yoktur ve ailesi ondan özel bir yetenek bekleyecektir.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-orumcek-adam-orumcek-evreninde-animasyon-film-izle.webp"
            },
            {
                title: "Logan",
                description: "Logan ve Profesör Charles Xavier, X-Men’in Nathaniel Essex tarafından yönetilmesi nedeni ile gelen kayba alışmak zorundalar. Bu sırada Logan’ın iyileşme gücü zayıflamakta ve Profesör Charles Xavier’in de Alzheimer hastalığı herşeyi unutmasına neden olmaktadır.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/logan-izle-fhd5-36704.webp"
            },
            {
                title: "Yenilmezler 1 The Avengers 1",
                description: "Yenilmezler 1 filminde, Marvel’in en çok iz bırakan kahramanlarını bir arada buluşuyor. Demir Adam, Hulk, Thor, Kaptan Amerika, Hawkeye ve Black Widow. Beklenmedik bir düşman su yüzüne çıkıp dünyanın güvenliğini tehdit etmeye başlıyor.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-yenilmezler-the-avengers-izle.webp"
            },
            {
                title: "Batman 2 Kara Şövalye",
                description: "'The Dark Knight' da, Batman suça karşı savaşını daha da ileriye götürüyor: Teğmen Jim Gordon ve Bölge Savcısı Harvey Dent’in yardımlarıyla, Batman, şehir sokaklarını sarmış olan suç örgütlerinden geriye kalanları temizlemeye girişir.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/batman-2-kara-sovalye-izle-3-59964.webp"
            },
            {
                title: "Yenilmezler 4 Son Oyun",
                description: "Avengers: Endgame, Marvel Sinematik Evreni'nin en büyük ve heyecan verici filmi olarak karşımıza çıkıyor. Bu film, 22 Marvel filminin hikayesini birbirine bağlayarak, uzun bir süreç sonunda gelinen noktanın doruk noktasını sunuyor.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/yenilmezler-4-son-oyun-izle-1-87544.webp"
            },
            {
                title: "Ejderhanı Nasıl Eğitirsin How to Train Your Dragon",
                description: "Uzun zamanlar önce Berk Adası’nın kuzeyinde yaşamakta olan genç bir Viking olan Hıçkıdık’ın hikayesi konu edilmiş durumdadır.  Ejderhalarla mücadele edilen Berk Adası’nda, sürekli olarak ejderhalar tarafından saldırıya uğrarlar ve koyunları çalınır.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-ejderhani-nasil-egitirsin-2010-i.webp"
            },
            {
                title: "Karayip Korsanları 1 Siyah İncinin Laneti",
                description: "Bu denizin dalgasının vurduğu öyküde, bilgili ama sakar bir korsan olan Kaptan Jack Sparrow, gemisini kaybetmiş bir korsan kaptandır. Hakkında lanetli olduğu söylentileri bulunan Siyah İnci’sine tekrar kavuşabilmek için ise tüm korsanlık becerilerini kullanacak ve tekrardan dümenin başına geçmeyi başaracaktır.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-karayip-korsanlari-1-siyah-incinin-laneti-izle.webp"
            },
            {
                title: "Lucy",
                description: "Hemen hemen her ülkede uyuşturucu baronları vardır ve satın alamayacağı polis yoktur.  Tayvan'ın başkenti olan Taipe şehrininde büyük uyuşturucu baronları istediği polisi para gücü ile satın alıyor Lucy adında bir kadın ve bunun gibi olan insanları bu ticareti yapmaya zorluyor.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/fullhd-lucy-filmi-full-izle-hd.webp"
            },
            {
                title: "Hızlı ve Öfkeli 10 Fast X",
                description: "Hızlı ve Öfkeli 10, Dom Torretto’dan intikam almak için onu sevdiklerini hedef alan bir kötüye karşı zorlu bir mücadeleye girişen Dom ve ekibinin hikayesini konu ediyor.",
                url: "https://img.fullhdfilmizlesene.pw/poster/izle/hizli-ve-ofkeli-10-fast-x-fhd4-84704.webp"
            }
        ];

        localStorage.setItem('movies', JSON.stringify(movies));
    }
};

eventListeners();
