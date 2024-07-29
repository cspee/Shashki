squares.forEach(square => {
    square.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    square.addEventListener('drop', (e) => {
        e.preventDefault();
        const imgSrc = e.dataTransfer.getData('text/plain');
        const parentId = e.dataTransfer.getData('parent-id');
        const draggedImg = document.querySelector(`img[src="${imgSrc}"]`);

        if (e.target.classList.contains('sqare') && e.target.childElementCount === 0) {
            e.target.appendChild(draggedImg);
        } else if (e.target.tagName === 'IMG' && e.target.parentElement.childElementCount === 0) {
            e.target.parentElement.appendChild(draggedImg);
        }
    });
});