const tg = window.Telegram.WebApp;
tg.expand();

// ТВОЙ ЮЗЕРНЕЙМ В ТЕЛЕГРАМ (чтобы кнопка "Написать" работала)
const DEVELOPER_USERNAME = "domowoy39"; // БЕЗ @, просто ник

// Навигация
function goTo(screenId) {
    // Скрываем все экраны
    document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
    
    // Показываем нужный
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove('hidden');
        window.scrollTo(0, 0); // Скролл наверх
    }
    
    // Вибрация для тактильности
    tg.HapticFeedback.selectionChanged();
}

// Открытие бота (Deep Link)
function openBot(botUsername) {
    tg.HapticFeedback.impactOccurred('medium');
    // Открываем ссылку на бота внутри Telegram
    tg.openTelegramLink(`https://t.me/${botUsername}`);
}

// Открытие внешней ссылки (Резюме и т.д.)
function openLink(url) {
    tg.openLink(url);
}

// Связь с разработчиком
function contactDev() {
    tg.openTelegramLink(`https://t.me/${DEVELOPER_USERNAME}`);
}

// Обработка кнопки "Назад" самого устройства (Android)
tg.BackButton.onClick(() => {
    // Если мы не на главной, идем на главную
    const home = document.getElementById('home-screen');
    if (home.classList.contains('hidden')) {
        goTo('home-screen');
        tg.BackButton.hide();
    } else {
        tg.close();
    }
});

// Управление отображением нативной кнопки "Назад"
// Мы используем свои кнопки внутри UI, но для Android можно добавить логику
// В данной версии я использую кастомные кнопки "Назад" в HTML
