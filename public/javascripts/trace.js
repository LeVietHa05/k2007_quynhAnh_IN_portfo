let currentBlock = 1;
let currentBlockImage = 0;
let preview = document.getElementById('preview');
let poemPreview = document.getElementById('poem-preview');
let poemContainers = document.querySelectorAll('.poem-container');
let poemPrev = document.querySelector('.poem-prev');
let poemNext = document.querySelector('.poem-next');

poemContainers.forEach((poemContainer, index) => {
    poemContainer.addEventListener('click', () => {
        preview.style.display = 'flex';
        // poemPreview.classList.add('row-center');
        console.log(currentBlock);
        poemPrev.style.display = 'block';
        poemPrev.style.opacity = 1;
        poemNext.style.display = 'block';
        poemNext.style.opacity = 1;
        poemPreview.innerHTML =
            `
            <div class='p20 bg-milk col-center justify-start max-width-60p' style='overflow-y:auto ;max-height: 90%;margin: 10px 0;'>
                <img style='width:100%' src="${blocks[currentBlock].imgs[currentBlockImage]}" alt="">
                <p class='h6-2nd'>${blocks[currentBlock].content}</p>
            </div>
        `
    })
})
poemPrev.addEventListener('click', () => {
    console.log('clicked prev');
    if (currentBlock == 1 && currentBlockImage == 0) {
        preview.style.display = 'none';
        return;
    }
    if (currentBlockImage == 0) {
        currentBlock--;
        currentBlockImage = blocks[currentBlock].imgs.length - 1;
    } else {
        currentBlockImage--;
    }
    poemPreview.innerHTML =
        `
        <div class='p20 bg-milk col-center justify-start max-width-60p'  style='overflow-y:auto ;max-height: 90%;margin: 10px 0;'>
            <img style='width:100%' src="${blocks[currentBlock].imgs[currentBlockImage]}" alt="">
            <p class='h6-2nd '>${blocks[currentBlock].content}</p>
        </div>
    `
})
poemNext.addEventListener('click', () => {
    console.log('clicked next');
    if (currentBlock == Object.keys(blocks).length && currentBlockImage == blocks[currentBlock].imgs.length - 1) {
        preview.style.display = 'none';
        return;
    }
    if (currentBlockImage == blocks[currentBlock].imgs.length - 1) {
        currentBlockImage = 0;
        currentBlock++;
    } else {
        currentBlockImage++;
    }
    poemPreview.innerHTML =
        `
        <div class='p20 bg-milk col-center justify-start max-width-60p'  style='overflow-y:auto ;max-height: 90%; margin: 10px 0;'>
            <img style='width:100%' src="${blocks[currentBlock].imgs[currentBlockImage]}" alt="">
            <p class='h6-2nd '>${blocks[currentBlock].content}</p>
        </div>
    `
})

preview.addEventListener('click', (e) => {
    if (e.target === preview) {
        preview.style.display = 'none';
        // currentBlock = 0;
    }
})
