let currentIndex = 1;
showImage(1)
function showImage(index) {
    currentIndex = index;
    let mainImage = document.getElementById("main-image");
    mainImage.src = images[index - 1].src;
    if (images[index - 1].type == 'portrait') {
        mainImage.style.width = 'auto';
        mainImage.style.height = '100%';
    } else {
        mainImage.style.width = '100%';
        mainImage.style.height = 'auto';
    }
}

function changeSlide(step) {
    currentIndex += step;
    if (currentIndex > images.length) {
        currentIndex = 1;
    } else if (currentIndex < 1) {
        currentIndex = images.length;
    }
    showImage(currentIndex);
}

function genPreview() {
    let previewContainer = document.querySelector(".preview-container");

    for (let i = 0; i < images.length; i++) {
        let previewDiv = document.createElement("div");
        previewDiv.className = "preview";
        let previewImage = document.createElement("img");
        previewImage.src = images[i].src;
        previewImage.className = "preview-image";
        previewImage.onclick = function () {
            showImage(i + 1);
        };
        previewDiv.appendChild(previewImage);
        previewContainer.appendChild(previewDiv);
    }
}

for (let text of blocks) {
    let block = document.createElement("div");
    block.className = "block";
    let content = document.createElement("p");
    content.style.margin = `12px 0`
    content.innerHTML = text;
    block.appendChild(content);
    document.querySelector(".text-content").appendChild(block);
}

genPreview();