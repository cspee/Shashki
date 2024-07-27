document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.sqaresContainer')
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div')
        square.classList.add('sqare')
        container.appendChild(square)
    }
    const sqares = document.querySelectorAll('.sqare')
    const img = document.createElement('img')
    img.src = 'assets/black.jpg'
    img.classList.add('circleStyle')
    sqares[3].appendChild(img)

    const numColumns = 8, numLines = 8;
    for (let i = 0; i < 0; i++) {
        
    }
})