// get item
const btn = document.querySelector('.btn-change-Color')
const showCodehex = document.querySelector('.show-cod-hex')
const showCodeRgb = document.querySelector('.show-code-rgb')

// add EventListener for click
btn.addEventListener('click',colorBuild)
function colorBuild() {
    let char = '1234567890abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += char[Math.floor(Math.random() * char.length)] 
    }
    document.body.style.backgroundColor = '#' + color
    showCodehex.textContent = '#' + color
    showCodeRgb.textContent = document.body.style.backgroundColor
}

// automatic change backgroundcolor
const automatic = document.querySelector('.auto input[type="checkbox"]')
automatic.addEventListener('change',animateBackground)

let end;
function animateBackground() {
    if (automatic.checked) {
    end = setInterval(() => {
        colorBuild()
    }, 400)}
    else{
        clearInterval(end)
    }
}



























