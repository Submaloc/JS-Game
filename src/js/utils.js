//Вынес в отдельную функцию переключение тёмной темы и произвёл export
export const darkModeHandle = () => {
// Получаем элементы из DOM
const darkModeSwitcher = document.getElementById('toggleDarkMode')
const htmlElement = document.documentElement // - это обращение к корневому элементу DOM-дерева, а именно к тегу <html>.

// При загрузке страницы проверяем тему из localStorage
if (localStorage.getItem('mode') === 'dark') {
    htmlElement.classList.add('dark')          
    darkModeSwitcher.checked = true             
}

// Обработчик переключения темы
darkModeSwitcher.addEventListener('click', () => {

  // if(htmlElement.classList.contains('dark')) {
    //     htmlElement.classList.remove('dark')
    // } else {
    //     htmlElement.classList.add('dark')
    // }

    htmlElement.classList.toggle('dark')        

    // Сохраняем выбранную тему в localStorage
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark')
    } else {
        localStorage.setItem('mode', 'light')
    }
})
}