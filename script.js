function showRegistration() {
    // Скрыть главную страницу и показать страницу регистрации
    document.getElementById("main-screen").style.display = "none";
    document.getElementById("registration-screen").style.display = "block";
}

function submitRegistration(event) {
    event.preventDefault();

    // Получить данные формы
    const form = document.getElementById("registration-form");
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Отправить данные формы на сервер или API для сохранения в базу данных
    // Поскольку GitHub Pages не поддерживает серверной части, используйте сторонний API или сервис
    // Например, вы можете использовать Fetch API для отправки данных

    fetch('https://api.example.com/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => {
        if (response.ok) {
            alert('Регистрация прошла успешно!');
            form.reset();
            // Вернуться на главную страницу
            document.getElementById("registration-screen").style.display = "none";
            document.getElementById("main-screen").style.display = "block";
        } else {
            alert('Ошибка регистрации. Попробуйте снова.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка регистрации. Попробуйте снова.');
    });
}
