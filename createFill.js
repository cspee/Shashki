document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.sqaresContainer');
    const numColumns = 8;
    const numRows = 8;

    for (let i = 0; i < numRows * numColumns; i++) {
        const square = document.createElement('div');
        square.classList.add('sqare');

        if ((Math.floor(i / numColumns) + i % numColumns) % 2 === 0) {
            square.style.backgroundColor = 'burlywood'; 
        } else {
            square.style.backgroundColor = 'saddlebrown'; 
        }

        container.appendChild(square);
    }

    const squares = document.querySelectorAll('.sqare');

debugger

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < numColumns; col++) {
            if ((row + col) % 2 !== 0) { 
                const index = row * numColumns + col;
                const img = document.createElement('img');
                img.src = 'assets/black.jpg';
                img.classList.add('circleStyle');
                squares[index].appendChild(img);
            }
        }
    }

    for (let row = numRows - 3; row < numRows; row++) {
        for (let col = 0; col < numColumns; col++) {
            if ((row + col) % 2 !== 0) {
                const index = row * numColumns + col;
                const img = document.createElement('img');
                img.src = 'assets/white.jpg';
                img.classList.add('circleStyle');
                squares[index].appendChild(img);
            }
        }
    }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.index);
        e.dataTransfer.effectAllowed = 'move';
    }

    function dragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    function drop(e) {
        e.preventDefault();
        const sourceIndex = e.dataTransfer.getData('text/plain');
        const targetIndex = Array.from(squares).indexOf(e.currentTarget);

        const sourceSquare = squares[sourceIndex];
        const targetSquare = e.currentTarget;

        const draggedImage = sourceSquare.querySelector('img');
        if (draggedImage) {
            targetSquare.appendChild(draggedImage);
            draggedImage.dataset.index = targetIndex;
        }
    }

    function dragEnd(e) {
        e.target.style.opacity = '';
    }

    squares.forEach(square => {
        square.addEventListener('dragover', dragOver);
        square.addEventListener('drop', drop);
        square.addEventListener('dragend', dragEnd);
    });

});
