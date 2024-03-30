const splash = document.querySelector('.splash-project')
const splash_text = document.querySelector('.splash-text-project')
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash_text.classList.add('fadeDownOut')
    }, 2000)
    setTimeout(() => {
        splash.classList.add('fadeOut')
    }, 2400)
    setTimeout(() => {
        splash_text.classList.add('hidden')
    }, 3000)
    setTimeout(() => {
        splash.classList.add('hidden')
    }, 3400)
})