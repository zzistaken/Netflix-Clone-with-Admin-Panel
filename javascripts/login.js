document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById("inp-email");
    const passwordInput = document.getElementById("inp-password");
    const mailPlaceholder = emailInput.placeholder;
    const passPlaceholder = passwordInput.placeholder;
    const form = document.getElementById("login-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için
        goIndex(emailInput, passwordInput);
    });

    emailInput.addEventListener('focus', () => {
        addFloatingLabel(emailInput, "E-posta");
        emailInput.placeholder = "";
    });

    passwordInput.addEventListener('focus', () => {
        addFloatingLabel(passwordInput, "Parola");
        passwordInput.placeholder = "";
    });

    emailInput.addEventListener('blur', () => {
        checkInput(emailInput, "Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.");
        emailInput.placeholder = mailPlaceholder;
        removeFloatingLabel(emailInput);
    });

    passwordInput.addEventListener('blur', () => {
        checkInput(passwordInput, "Parolanız 4 ila 60 karakter olmalıdır.");
        passwordInput.placeholder = passPlaceholder;
        removeFloatingLabel(passwordInput);
    });
});

const checkInput = (inputElement, errorMessage) => {
    let errorElement = document.getElementById(inputElement.id + "-error");

    if (inputElement.value.trim() === "") {
        if (!errorElement) {
            errorElement = document.createElement("h3");
            errorElement.id = inputElement.id + "-error";
            errorElement.className = "error-message";
            inputElement.parentNode.appendChild(errorElement);
            inputElement.classList.add("input-field-error");
        }
        errorElement.innerText = errorMessage;
    } else {
        if (errorElement) {
            errorElement.remove();
            inputElement.classList.remove("input-field-error");
        }
    }
};

const addFloatingLabel = (inputElement, labelText) => {
    let labelElement = document.createElement("h5");
    labelElement.className = "floating-label";
    labelElement.innerText = labelText;
    inputElement.parentNode.appendChild(labelElement);
};

const removeFloatingLabel = inputElement => {
    let labelElement = inputElement.parentNode.querySelector(".floating-label");
    if (labelElement) {
        labelElement.remove();
    }
};

const goIndex = (emailInput, passwordInput) => {
    const mail = emailInput.value;
    const pw = passwordInput.value;

    if (mail === "admin@gmail.com" && pw === "12345") {
        const newPageUrl = "index.html";
        window.location.href = newPageUrl;
    }
    else if (mail === "" || pw === "") {
        alert("Kullanıcı bilgisi boş bırakılamaz!");
    }
    else {
        alert("Hatalı kullanıcı bilgisi!");
    }
};