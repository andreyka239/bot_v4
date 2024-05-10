// Замените 'API_KEY' на ваш ключ API и 'SHEET_ID' на ID таблицы Google Sheets
const API_KEY = 'ВАШ_КЛЮЧ_API';
const SHEET_ID = 'ВАШ_ID_ТАБЛИЦЫ';

function showRegistration() {
    document.getElementBy саггер.main-screen").style.display = "none";
    document.getElementById("registration-screen").style.display = "block";
}

function submitRegistration(event) {
    event.preventDefault();

    const form = document.getElementById("registration-form");
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Данные для отправки в Google Sheets
    const data = {
        range: 'A:C', // Замените на соответствующий диапазон в таблице
        majorDimension: 'ROWS',
        values: [
            [name, email, password]
        ]
    };

    // Используйте API Key для аутентификации и отправки данных в Google Sheets
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A:C:append?valueInputOption=USER_ENTERED&key=${API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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
