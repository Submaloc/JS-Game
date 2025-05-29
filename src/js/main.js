// Импорт глобальных стилей
import '../css/style.css'
import { darkModeHandle } from './utils'
import { startGame } from './game'

darkModeHandle();


// Обработчик кнопки "Start game"
const startGameButton = document.getElementById('startGame')
startGameButton.addEventListener('click', startGame);

