// const squares = document.querySelectorAll('.sqare')
// const place = document.querySelector('.square2');
// let offsetX, offsetY, dragging = false;

// for (let i = 0; i < squares.length; i++) {
//     squares[i].addEventListener("mousedown", () => {
//         offsetX = e.clientX - squares[i].getBoundingClientRect().left;
//         offsetY = e.clientY - squares[i].getBoundingClientRect().top;
//         dragging = true;
//         squares[i].style.cursor = 'grabbing';
//     })
// }




// document.addEventListener('mousemove', (e) => {
//     if (dragging) {
//         pressA.style.position = 'absolute';
//         pressA.style.left = `${e.clientX - offsetX}px`;
//         pressA.style.top = `${e.clientY - offsetY}px`;
//     }
// });

// document.addEventListener('mouseup', (e) => {
//     if (dragging) {
//         dragging = false;
//         pressA.style.cursor = 'pointer';
//         const placeRect = place.getBoundingClientRect();
//         const pressARect = pressA.getBoundingClientRect();

//         if (
//             pressARect.left >= placeRect.left &&
//             pressARect.top >= placeRect.top &&
//             pressARect.right <= placeRect.right &&
//             pressARect.bottom <= placeRect.bottom
//         ) {
//             pressA.style.position = 'relative';
//             pressA.style.left = '0';
//             pressA.style.top = '0';
//             place.appendChild(pressA);
//         } else {
//             pressA.style.position = 'static';
//         }
//     }
// });




document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.sqaresContainer');
    const squares = document.querySelectorAll('.circleStyle');
    let draggedElement = null;

    // Добавляем обработчики событий для начала и окончания перетаскивания
    container.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('circleStyle')) {
            draggedElement = event.target;
            draggedElement.style.zIndex = 1000;
        }
    });

    container.addEventListener('mouseup', () => {
        if (draggedElement) {
            draggedElement.style.zIndex = '';
            draggedElement = null;
        }
    });

    container.addEventListener('mousemove', (event) => {
        if (draggedElement) {
            draggedElement.style.left = `${event.pageX - container.offsetLeft - draggedElement.clientWidth / 2}px`;
            draggedElement.style.top = `${event.pageY - container.offsetTop - draggedElement.clientHeight / 2}px`;
        }
    });

    container.addEventListener('mouseleave', () => {
        if (draggedElement) {
            draggedElement.style.zIndex = '';
            draggedElement = null;
        }
    });

    // Обработчик для определения, когда шашка размещается на другом квадрате
    container.addEventListener('mouseup', (event) => {
        if (draggedElement) {
            const targetSquare = event.target.closest('.sqare');
            if (targetSquare && targetSquare !== draggedElement.parentElement) {
                targetSquare.appendChild(draggedElement);
            }
            draggedElement.style.zIndex = '';
            draggedElement.style.left = '';
            draggedElement.style.top = '';
            draggedElement = null;
        }
    });
});