document.addEventListener('DOMContentLoaded', function() {
    const directionsBtn = document.getElementById('directionsBtn');
    const directions = document.getElementById('directions');
    directionsBtn.addEventListener('click', function() {
        directions.style.display = 'block';
    });

    const createBotBtn = document.getElementById('createBotBtn');
    createBotBtn.addEventListener('click', function() {
        alert("Чтобы создать своего бота, выполните 2 простых шага:\n\n1. Сгенерируйте токен бота в @Botfather (это официальный бот Телеграма, только через него можно создать своего бота):\n- перейдите в @Botfather и отправьте ему команду /newbot\n- следуйте указаниям в боте, приумайте название, которое заканчивается на bot или _bot. Это имя будет видно админам каналов, куда вы будете пересылать отложки и креативы для рекламы, учитывайте это, придумывая название) \n- если вам удалось занять уникальное имя, которое никто не использует - @botfather пришлет вам сообщение с токеном для доступа:\n\n2. Скопируйте токен (набор символов после фразы: Use whis token to access the HTTP API) и перешлите токен в этого бота");
    });

    const pricingBtn = document.getElementById('pricingBtn');
    pricingBtn.addEventListener('click', function() {
        alert("30 дней вы можете использовать бота абсолютно бесплатно, после - потребуется приобрести подписку.\n\nСтоимость подписки (за 1 подключенный канал):\n\n1 месяц - 250 руб\n3 месяца - 690 руб (230 руб / мес)\n6 мес - 1290 руб (215 руб / мес)\n12 месяцев - 2400 руб (200 руб / мес)\n\nПодробнее о ценах (ссылка на страницу сайта)");
    });

    const myBotsBtn = document.getElementById('myBotsBtn');
    myBotsBtn.addEventListener('click', function() {
        window.location.href = "ссылка_на_вашу_страницу_с_ботами";
    });

    const delegatedBotsBtn = document.getElementById('delegatedBotsBtn');
    delegatedBotsBtn.addEventListener('click', function() {
        window.location.href = "ссылка_на_страницу_с_делегированными_ботами";
    });
});
