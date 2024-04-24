
// Start Animate On Scroll
const portfolio_title = document.querySelector('.portfolio-title')
const portfolio_text = document.querySelector('.portfolio-text')
const portfolio_text_sec = document.querySelector('.portfolio-text-sec')
const image_home1 = document.querySelector('.image-home1')
const image_home2 = document.querySelector('.image-home2')
const image_home3 = document.querySelector('.image-home3')
const text_about1 = document.querySelector('.text-about1')
const text_about2 = document.querySelector('.text-about2')
const text_about3 = document.querySelector('.text-about3')
const text_about4 = document.querySelector('.text-about4')
const dropdownDivider = document.getElementById('dropdownDividerButton')
const dropdownDivider2 = document.getElementById('dropdownDividerButton2')
const dropdownDivider3 = document.getElementById('dropdownDividerButton3')
const project_title = document.querySelector('.project-title')
const image_project = document.querySelector('.image-project')
const btn_project = document.querySelector('.btn-project')
const contact_title = document.querySelector('.contact-title')
const contact_title2 = document.querySelector('.contact-title2')
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const text_contact = document.querySelector('.text-contact')
const textarea = document.querySelector('.text-area')
const btn_contact = document.querySelector('.btn-contact')

var height = document.getElementById("homepage").clientHeight
console.log(height)
window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    if (window.scrollY > 10) {
        portfolio_text.classList.add('fadeDown')
        portfolio_text_sec.classList.add('fadeDown')
        portfolio_text.classList.remove('gone')
        portfolio_text_sec.classList.remove('gone')
    }
    if (window.scrollY > 95) {
        image_home1.classList.add('fadeUp')
        image_home1.classList.remove('gone')
    }
    if (window.scrollY > 115) {
        image_home2.classList.add('fadeUp')
        image_home2.classList.remove('gone')
    }
    if (window.scrollY > 195) {
        image_home3.classList.add('fadeUp')
        image_home3.classList.remove('gone')
    }
    if (window.scrollY > 290) {
        text_about1.classList.add('fadeDown')
        text_about1.classList.remove('gone')
    }
    if (window.scrollY > 345) {
        text_about3.classList.add('fadeIn')
        text_about3.classList.remove('gone')
    }
    if (window.scrollY > 445) {
        text_about2.classList.add('fadeUp')
        text_about2.classList.remove('gone')
    }
    if (window.scrollY > 470) {
        text_about4.classList.add('fadeDown')
        text_about4.classList.remove('gone')
    }
    if (window.scrollY > 530) {
        dropdownDivider.classList.add('fadeDown')
        dropdownDivider.classList.remove('gone')
    }
    if (window.scrollY > 540) {
        dropdownDivider3.classList.add('fadeDown')
        dropdownDivider3.classList.remove('gone')
    }
    if (window.scrollY > 550) {
        dropdownDivider2.classList.add('fadeDown')
        dropdownDivider2.classList.remove('gone')
    }
    if (window.scrollY > 720) {
        project_title.classList.add('fadeDown')
        project_title.classList.remove('gone')
    }
    if (window.scrollY > 900) {
        image_project.classList.add('fadeIn')
        image_project.classList.remove('gone')
    }
    if (window.scrollY > 1300) {
        btn_project.classList.add('fadeDown')
        btn_project.classList.remove('gone')
    }
    if (window.scrollY > 1700) {
        contact_title.classList.add('fadeIn')
        contact_title.classList.remove('gone')
        contact_title2.classList.add('fadeIn')
        contact_title2.classList.remove('gone')
        input1.classList.add('fadeIn')
        input1.classList.remove('gone')
        input2.classList.add('fadeIn')
        input2.classList.remove('gone')
        text_contact.classList.add('fadeIn')
        text_contact.classList.remove('gone')
        textarea.classList.add('fadeIn')
        textarea.classList.remove('gone')
        btn_contact.classList.add('fadeIn')
        btn_contact.classList.remove('gone')
    }
});


// Start Splash
const splash = document.querySelector('.splash')
const splash_text = document.querySelector('.splash-text')
const navbar = document.getElementById('nav')
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash_text.classList.add('fadeOut')
    }, 1500)
    setTimeout(() => {
        splash_text.classList.add('hidden')
    }, 2500)
    setTimeout(() => {
        splash.classList.add('fadeOut')
    }, 2600)
    setTimeout(() => {
        splash.classList.add('hidden')
    }, 3600)
    setTimeout(() => {
        navbar.classList.add('slideDown')
        navbar.classList.remove('gone')
    }, 3110)
    setTimeout(() => {
        portfolio_title.classList.add('fadeUp')
        portfolio_title.classList.remove('gone')
    }, 3200)
})


// Start Hide Code
document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'i'.charCodeAt(0))) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'c'.charCodeAt(0))) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'j'.charCodeAt(0))) {
        return false;
    }
    if (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0) || e.keyCode == 'u'.charCodeAt(0))) {
        return false;
    }
    if (e.ctrlKey && (e.keyCode == 'S'.charCodeAt(0) || e.keyCode == 's'.charCodeAt(0))) {
        return false;
    }
}