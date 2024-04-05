const splash = document.querySelector('.splash-project')
const splash_text = document.querySelector('.splash-text-project')
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash_text.classList.add('fadeDownOut')
    }, 1500)
    setTimeout(() => {
        splash.classList.add('fadeOut')
    }, 1900)
    setTimeout(() => {
        splash_text.classList.add('hidden')
    }, 2500)
    setTimeout(() => {
        splash.classList.add('hidden')
    }, 2900)
})
